/**
 * ==============================================================================
 * TryFinally — Forum Servisi (Forum Service)
 * ==============================================================================
 * Forum konularını getirme, oluşturma ve yorumlama gibi iş mantığı
 * operasyonlarını yönetir.
 * ==============================================================================
 */

import { logger } from "@/lib/logger";
import type { ForumThread } from "./types";

// Başlangıç için yeni başlayan dostu örnek forum başlıkları (Seed Data)
const INITIAL_THREADS: ForumThread[] = [
  {
    id: "thread-1",
    title: "Döngüler (for / while) gerçek hayatta tam olarak ne işe yarar?",
    slug: "donguler-ne-ise-yarar",
    content: "Yazılıma yeni başladım ve döngü kavramını anlamaya çalışıyorum. Kod yazarken aynı işlemi tekrar tekrar yapmaktan başka nerede kullanırız?",
    category: "genel",
    tags: ["başlangıç", "döngüler", "mantık"],
    authorId: "user-1",
    authorName: "Ali Demir",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    votes: 14,
    commentCount: 3,
    isResolved: true,
  },
  {
    id: "thread-2",
    title: "Değişken tanımlarken let ile const arasındaki fark nedir?",
    slug: "let-ile-const-farki",
    content: "JavaScript öğrenirken hangisini ne zaman seçmeliyim? İkisi de veri tutuyor gibi görünüyor.",
    category: "javascript",
    tags: ["javascript", "değişkenler", "temel"],
    authorId: "user-2",
    authorName: "Zeynep Kaya",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    votes: 9,
    commentCount: 2,
    isResolved: false,
  },
];

/**
 * Tüm forum başlıklarını getirir.
 */
export async function getForumThreads(): Promise<ForumThread[]> {
  logger.info("Forum", "Forum başlıkları listeleniyor");
  return Promise.resolve(INITIAL_THREADS);
}

/**
 * ID'ye göre tekil bir forum başlığı getirir.
 */
export async function getThreadById(id: string): Promise<ForumThread | null> {
  logger.info("Forum", "Başlık detayı isteniyor", { threadId: id });
  const thread = INITIAL_THREADS.find((t) => t.id === id) || null;
  return Promise.resolve(thread);
}
