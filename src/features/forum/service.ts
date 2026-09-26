/**
 * ==============================================================================
 * TryFinally — Forum Servisi (Forum Service)
 * ==============================================================================
 * Forum konularını getirme, oluşturma ve yorumlama gibi iş mantığı
 * operasyonlarını yönetir.
 * ==============================================================================
 */

import { logger } from "@/lib/logger";
import type { ForumThread, ForumComment } from "./types";

// Başlangıç için örnek forum başlıkları (Seed Data)
const INITIAL_THREADS: ForumThread[] = [
  {
    id: "thread-1",
    title: "İki Sayının Toplamı (Two Sum) algoritmasında n^2 yerine O(n) nasıl yapılır?",
    slug: "two-sum-o-n-nasil-yapilir",
    content: "İç içe iki for döngüsü kullandığımda zaman aşımı alıyorum. Hash Map (obje) kullanarak bu soruyu tek geçişte nasıl çözebiliriz?",
    category: "algoritmalar",
    tags: ["javascript", "hashmap", "time-complexity"],
    authorId: "user-1",
    authorName: "Ahmet Yılmaz",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    votes: 12,
    commentCount: 3,
    isResolved: true,
  },
  {
    id: "thread-2",
    title: "Python'da liste ters çevirme: [::-1] ile reverse() arasındaki fark nedir?",
    slug: "python-liste-ters-cevirme-farklari",
    content: "Algoritma sorularını çözerken listeyi ters çevirmem gerekiyor. Hangisi bellekte yeni bir kopya oluşturur?",
    category: "python",
    tags: ["python", "liste", "bellek"],
    authorId: "user-2",
    authorName: "Zeynep Kaya",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    votes: 8,
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
