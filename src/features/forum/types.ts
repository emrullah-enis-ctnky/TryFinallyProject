/**
 * ==============================================================================
 * TryFinally — Topluluk Forumu Tip Tanımları (Forum Types)
 * ==============================================================================
 * Bu dosya, forum başlıkları, yorumlar, oylamalar ve kategoriler için
 * temel domain modellerini içerir.
 * ==============================================================================
 */

export type ForumCategory =
  | "genel"
  | "algoritmalar"
  | "javascript"
  | "python"
  | "soru-cevap"
  | "hata-yardim";

export interface ForumComment {
  id: string;
  threadId: string;
  authorId: string;
  authorName: string;
  authorAvatar?: string;
  content: string;
  createdAt: string;
  votes: number;
  isAcceptedSolution?: boolean;
}

export interface ForumThread {
  id: string;
  title: string;
  slug: string;
  content: string;
  category: ForumCategory;
  tags: string[];
  authorId: string;
  authorName: string;
  authorAvatar?: string;
  puzzleId?: string; // İlgili algoritma sorusu varsa bağlantısı
  createdAt: string;
  updatedAt: string;
  votes: number;
  commentCount: number;
  isResolved: boolean;
}
