import { logger } from "@/lib/logger";
import type { ForumThread } from "./types";

// Başlangıç mock verisi
const SEED_THREADS: ForumThread[] = [
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

// Geliştirme ortamında listenin sıfırlanmaması için global saklayıcı
const globalForForum = globalThis as unknown as {
  forumThreads: ForumThread[];
};

export const threadsStore = globalForForum.forumThreads || [...SEED_THREADS];

if (process.env.NODE_ENV !== "production") {
  globalForForum.forumThreads = threadsStore;
}

/**
 * Tüm forum başlıklarını getirir.
 */
export async function getForumThreads(): Promise<ForumThread[]> {
  logger.info("Forum", "Forum başlıkları listeleniyor");
  return Promise.resolve(threadsStore);
}

/**
 * ID'ye göre tekil bir forum başlığı getirir.
 */
export async function getThreadById(id: string): Promise<ForumThread | null> {
  logger.info("Forum", "Başlık detayı isteniyor", { threadId: id });
  const thread = threadsStore.find((t) => t.id === id) || null;
  return Promise.resolve(thread);
}

/**
 * Yeni bir forum başlığı oluşturur ve listenin başına ekler.
 */
export async function createThread(data: {
  title: string;
  content: string;
  category: string;
  tags: string[];
  authorName?: string;
}): Promise<ForumThread> {
  const newThread: ForumThread = {
    id: `thread-${Date.now()}`,
    title: data.title,
    slug: data.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-"),
    content: data.content,
    category: data.category,
    tags: data.tags,
    authorId: "user-1",
    authorName: data.authorName || "Misafir Kullanıcı",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    votes: 0,
    commentCount: 0,
    isResolved: false,
  };

  threadsStore.unshift(newThread);
  logger.info("Forum", "Yeni konu oluşturuldu", { threadId: newThread.id });
  return Promise.resolve(newThread);
}
/**
 * Belirtilen konuya yeni bir yanıt/yorum ekler.
 */
export async function addCommentToThread(
  threadId: string,
  content: string,
  authorName: string = "Misafir Kullanıcı"
) {
  const thread = threadsStore.find((t) => t.id === threadId);
  if (!thread) return null;

  if (!thread.comments) {
    thread.comments = [];
  }

  const newComment = {
    id: `comment-${Date.now()}`,
    content,
    authorName,
    createdAt: new Date().toISOString(),
  };

  thread.comments.push(newComment);
  thread.commentCount = thread.comments.length;

  logger.info("Forum", "Yeni yanıt eklendi", { threadId, commentId: newComment.id });
  return thread;
}

/**
 * Konunun beğeni sayısını artırır veya azaltır.
 */
export async function toggleThreadVote(threadId: string, increment: boolean) {
  const thread = threadsStore.find((t) => t.id === threadId);
  if (!thread) return null;

  thread.votes = Math.max(0, thread.votes + (increment ? 1 : -1));
  logger.info("Forum", "Konu oyu güncellendi", { threadId, votes: thread.votes });
  return thread.votes;
}