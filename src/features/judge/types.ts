/**
 * ==============================================================================
 * TryFinally — Judge Sözleşmesi (Judge Types)
 * ==============================================================================
 * Judge motoru (judge/engine), judge-worker, /api/submissions uçları ve kodlama
 * ekranı (Modül 6) bu tipler üzerinden konuşur.
 *
 * Not: judge/ altındaki dosyalar bu dosyayı `import type` ile kullanır; burada
 * çalışma zamanı kodu (enum, fonksiyon) olmamalı.
 * ==============================================================================
 */

export type JudgeLanguage = "cpp" | "java" | "python";

/** Değerlendirme sonucu. Prisma'daki SubStatus enum'ının PENDING/RUNNING dışındaki değerleri. */
export type Verdict =
  | "ACCEPTED"
  | "WRONG_ANSWER"
  | "TIME_LIMIT"
  | "MEMORY_LIMIT"
  | "RUNTIME_ERROR"
  | "COMPILE_ERROR"
  | "INTERNAL_ERROR";

/** Gönderimin anlık durumu: sırada, çalışıyor ya da bir verdict. */
export type SubmissionStatus = "PENDING" | "RUNNING" | Verdict;

/** run = "Çalıştır" (sadece görünür testler, puan yok), submit = "Gönder" (tüm testler). */
export type SubmissionKind = "run" | "submit";

/** Judge'a verilen tek bir test. input ve expectedOutput JSON metnidir. */
export interface JudgeTestCase {
  id: string;
  input: string;
  expectedOutput: string;
  isHidden: boolean;
}

export interface JudgeRequest {
  language: JudgeLanguage;
  /** Kullanıcının editörde yazdığı kod. */
  code: string;
  /** Sorunun bu dildeki başlangıç kodu; çağrılacak metodun imzası buradan okunur. */
  starterCode: string;
  tests: JudgeTestCase[];
}

/** Bir testin ekranda gösterilecek sonucu. Gizli testlerde girdi/çıktı alanları boş kalır (başarısız olan hariç). */
export interface TestRunDetail {
  id: string;
  isHidden: boolean;
  passed: boolean;
  verdict: Verdict | null;
  timeMs: number | null;
  input?: string;
  expectedOutput?: string;
  actualOutput?: string | null;
  stdout?: string;
  error?: string;
}

export interface JudgeResult {
  verdict: Verdict;
  passedCount: number;
  totalCount: number;
  /** Geçen testlerdeki en uzun süre (ms). */
  runtimeMs: number | null;
  /** Derleme hatası metni (COMPILE_ERROR). */
  compileOutput?: string;
  /** İlk başarısız test; LeetCode gibi gizli olsa da girdisi gösterilir. */
  failedTest?: TestRunDetail;
  /** Sırasıyla tüm testler. Çalışmayan testler passed=false, verdict=null olur. */
  tests: TestRunDetail[];
  /** Testlerin dışında basılan çıktı (ör. C++ printf). */
  extraStdout?: string;
  /** INTERNAL_ERROR için teknik açıklama. */
  internalMessage?: string;
}

// ------------------------------------------------------------------------------
// API sözleşmesi
// ------------------------------------------------------------------------------

/** POST /api/submissions gövdesi */
export interface CreateSubmissionRequest {
  problemSlug: string;
  language: JudgeLanguage;
  code: string;
  kind: SubmissionKind;
}

/** POST /api/submissions yanıtı (202) */
export interface CreateSubmissionResponse {
  submissionId: string;
}

/** GET /api/submissions/:id yanıtı */
export interface SubmissionView {
  id: string;
  problemSlug: string;
  language: JudgeLanguage;
  kind: SubmissionKind;
  status: SubmissionStatus;
  passedCount: number;
  totalCount: number;
  runtimeMs: number | null;
  result: JudgeResult | null;
  /** Bu gönderim soruyu ilk kez çözdüyse kazanılan puan. */
  pointsAwarded: number;
  /**
   * Aynı soru ve dildeki diğer kabul edilmiş gönderimlerin yüzde kaçı bundan yavaş (0-100).
   * Sadece kabul edilmiş "Gönder"lerde ve karşılaştıracak başka gönderim varsa dolu.
   */
  runtimeBeatsPercent: number | null;
  createdAt: string;
  judgedAt: string | null;
}

/** Gönderim geçmişindeki tek satır */
export interface SubmissionSummary {
  id: string;
  status: SubmissionStatus;
  language: JudgeLanguage;
  runtimeMs: number | null;
  passedCount: number;
  totalCount: number;
  createdAt: string;
}

/** GET /api/submissions?problem=<slug> yanıtı: kullanıcının o sorudaki "Gönder"leri, en yenisi başta */
export interface ListSubmissionsResponse {
  submissions: SubmissionSummary[];
}
