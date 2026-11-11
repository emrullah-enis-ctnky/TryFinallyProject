
/**
 * ==============================================================================
 * TryFinally — Gerçek Judge Worker Entegrasyon Testi
 * ==============================================================================
 * Gerçek Judge Worker ile ilk başarılı çözümün puan, seviye ve
 * rozet güncellemelerini kontrol etmek için kullanılır.
 *
 * Komutlar:
 *   npx tsx tests/gamification/worker-smoke.ts prepare
 *   npx tsx tests/gamification/worker-smoke.ts verify
 *   npx tsx tests/gamification/worker-smoke.ts repeat
 *   npx tsx tests/gamification/worker-smoke.ts cleanup
 *
 * Yalnızca yerel geliştirme veritabanında kullanılmalıdır.
 * ==============================================================================
 */

import assert from "node:assert/strict";
import { existsSync } from "node:fs";

// Judge Worker ile aynı ortam değişkenlerini yükle.
for (const file of [".env.local", ".env"]) {
  if (existsSync(file)) {
    process.loadEnvFile(file);
  }
}

const TEST_USER_ID = "tf-gamification-worker-smoke";
const TEST_USER_NAME = "TryFinally Worker Smoke Test";
const PROBLEM_ID = "iki-sayiyi-toplama";

const SOLUTION_CODE = `class Solution:
    def addTwoNumbers(self, a, b):
        return a + b`;

/**
 * Yanlışlıkla ortak veya üretim veritabanında test yapılmasını engelle.
 */
function checkEnvironment(): void {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL bulunamadı.");
  }

  const url = new URL(databaseUrl);

  if (
    !["localhost", "127.0.0.1"].includes(url.hostname) ||
    url.port !== "5433"
  ) {
    throw new Error(
      "Bu test yalnızca localhost:5433 üzerindeki yerel PostgreSQL için çalışır."
    );
  }

  if (process.env.JUDGE_SANDBOX === "local") {
    throw new Error(
      "Bu test Docker sandbox kullanmalıdır. JUDGE_SANDBOX=local kullanmayın."
    );
  }
}

async function main(): Promise<void> {
  checkEnvironment();

  const { default: db } = await import("../../src/lib/db");

  const command = process.argv[2];

  try {
    if (command === "prepare") {
      // Aynı test kullanıcısı yanlışlıkla iki kez oluşturulmasın.
      const existingUser = await db.user.findUnique({
        where: { id: TEST_USER_ID },
      });

      if (existingUser) {
        throw new Error(
          "Test kullanıcısı zaten var. Önce mevcut test durumunu kontrol edin."
        );
      }

      // Gerçek soru zaten varsa değiştirme, yoksa gerekli kaydı oluştur.
      await db.problem.upsert({
        where: { id: PROBLEM_ID },
        update: {},
        create: {
          id: PROBLEM_ID,
          title: "İki Sayıyı Toplama",
          description: "İki sayının toplamını hesaplama problemi.",
          difficulty: "EASY",
          category: "Test",
          starterCode: "",
          pointsAwarded: 10,
        },
      });

      // Seviye değişimini gözlemleyebilmek için 95 puanla başlat.
      await db.user.create({
        data: {
          id: TEST_USER_ID,
          name: TEST_USER_NAME,
          totalPoints: 95,
          level: 1,
        },
      });

      const submission = await db.submission.create({
        data: {
          userId: TEST_USER_ID,
          problemId: PROBLEM_ID,
          language: "PYTHON",
          kind: "SUBMIT",
          code: SOLUTION_CODE,
          status: "PENDING",
        },
      });

      console.log("Test kullanıcısı oluşturuldu.");
      console.log("Başlangıç puanı: 95");
      console.log("Başlangıç seviyesi: 1");
      console.log("Gönderim ID:", submission.id);
      console.log("Gönderim durumu: PENDING");
      console.log("Şimdi Judge Worker başlatılabilir.");

    } else if (command === "verify") {
      const user = await db.user.findUniqueOrThrow({
        where: { id: TEST_USER_ID },
      });

      const submissions = await db.submission.findMany({
        where: { userId: TEST_USER_ID },
        orderBy: { createdAt: "asc" },
        select: {
          status: true,
          result: true,
        },
      });

      console.log(
        "Gönderim durumları:",
        submissions.map((submission) => submission.status)
      );

      assert.ok(submissions.length >= 1);
      assert.ok(submissions.length <= 2);

      for (const submission of submissions) {
        if (submission.status !== "ACCEPTED") {
          console.log(
            "Judge sonuç ayrıntısı:",
            JSON.stringify(submission.result, null, 2)
          );
        }

        assert.equal(submission.status, "ACCEPTED");
      }

      const solvedCount = await db.solvedProblem.count({
        where: { userId: TEST_USER_ID },
      });

      const achievements = await db.userAchievement.findMany({
        where: { userId: TEST_USER_ID },
        select: { achievementId: true },
      });

      assert.equal(user.totalPoints, 105);
      assert.equal(user.level, 2);
      assert.equal(solvedCount, 1);

      assert.deepEqual(
        achievements.map((item) => item.achievementId).sort(),
        ["badge-first-code", "badge-hundred-points"].sort()
      );

      console.log("Toplam puan:", user.totalPoints);
      console.log("Seviye:", user.level);
      console.log("Çözülen farklı problem:", solvedCount);
      console.log("Kazanılan rozet:", achievements.length);
      console.log("Gerçek Judge entegrasyon kontrolü başarılı!");

    } else if (command === "repeat") {
      const previousSubmissions = await db.submission.findMany({
        where: { userId: TEST_USER_ID },
      });

      assert.equal(previousSubmissions.length, 1);
      assert.equal(previousSubmissions[0].status, "ACCEPTED");

      // Aynı soruya ikinci başarılı gönderimi oluştur.
      const submission = await db.submission.create({
        data: {
          userId: TEST_USER_ID,
          problemId: PROBLEM_ID,
          language: "PYTHON",
          kind: "SUBMIT",
          code: SOLUTION_CODE,
          status: "PENDING",
        },
      });

      console.log("İkinci gönderim oluşturuldu:", submission.id);
      console.log("Judge işlemi tamamlandığında verify komutunu tekrar çalıştır.");

    } else if (command === "cleanup") {
      const user = await db.user.findUnique({
        where: { id: TEST_USER_ID },
      });

      if (user && user.name !== TEST_USER_NAME) {
        throw new Error("Test kullanıcısının kimliği beklenen değerle uyuşmuyor.");
      }

      const activeSubmissions = await db.submission.count({
        where: {
          userId: TEST_USER_ID,
          status: { in: ["PENDING", "RUNNING"] },
        },
      });

      if (activeSubmissions > 0) {
        throw new Error(
          "Henüz işlenen gönderimler var. Önce Worker işlemlerini tamamlayın."
        );
      }

      // İlişkili kayıtları doğru sırada temizle.
      await db.userAchievement.deleteMany({
        where: { userId: TEST_USER_ID },
      });

      await db.solvedProblem.deleteMany({
        where: { userId: TEST_USER_ID },
      });

      await db.submission.deleteMany({
        where: { userId: TEST_USER_ID },
      });

      await db.user.deleteMany({
        where: { id: TEST_USER_ID },
      });

      console.log("Geçici test kullanıcısı ve kayıtları temizlendi.");
      console.log("Gerçek problem kaydı ve rozet tanımları korundu.");

    } else {
      throw new Error(
        "Geçerli komutlar: prepare, verify, repeat, cleanup"
      );
    }
  } finally {
    await db.$disconnect();
  }
}

main().catch((error) => {
  console.error("Judge Worker testi başarısız:", error);
  process.exitCode = 1;
});
