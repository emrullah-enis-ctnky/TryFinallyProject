import { logger } from "@/lib/logger";
import type { ForumThread, ForumCategory, ForumComment } from "./types";

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
    commentCount: 0,
    isResolved: true,
    comments: [],
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
    commentCount: 0,
    isResolved: false,
    comments: [],
  },
];

const globalForForum = globalThis as unknown as {
  forumThreads: ForumThread[];
};

export const threadsStore = globalForForum.forumThreads || [...SEED_THREADS];

if (process.env.NODE_ENV !== "production") {
  globalForForum.forumThreads = threadsStore;
}

export async function getForumThreads(): Promise<ForumThread[]> {
  logger.info("Forum", "Forum başlıkları listeleniyor");
  return Promise.resolve(threadsStore);
}

export async function getThreadById(id: string): Promise<ForumThread | null> {
  logger.info("Forum", "Başlık detayı isteniyor", { threadId: id });
  const thread = threadsStore.find((t) => t.id === id) || null;
  return Promise.resolve(thread);
}

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
    category: (data.category as ForumCategory) || "genel",
    tags: data.tags,
    authorId: "user-1",
    authorName: data.authorName || "Misafir Kullanıcı",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    votes: 0,
    commentCount: 0,
    isResolved: false,
    comments: [],
  };

  threadsStore.unshift(newThread);
  logger.info("Forum", "Yeni konu oluşturuldu", { threadId: newThread.id });
  return Promise.resolve(newThread);
}

// Ağaçtaki tüm yorumları ve alt yanıtları özyinelemeli (recursive) sayar
function countTotalComments(comments: ForumComment[]): number {
  return comments.reduce((total, comment) => {
    const repliesCount = comment.replies ? countTotalComments(comment.replies) : 0;
    return total + 1 + repliesCount;
  }, 0);
}

// Ağaçta herhangi bir derinlikteki yorumu ID ile bulur
function findCommentRecursive(comments: ForumComment[], targetId: string): ForumComment | null {
  for (const comment of comments) {
    if (comment.id === targetId) return comment;
    if (comment.replies && comment.replies.length > 0) {
      const found = findCommentRecursive(comment.replies, targetId);
      if (found) return found;
    }
  }
  return null;
}

/**
 * Konuya yeni bir yorum veya ağaçtaki herhangi bir yoruma/yanıta alt yanıt ekler.
 */
export async function addCommentToThread(
  threadId: string,
  content: string,
  authorName: string = "Misafir Kullanıcı",
  parentCommentId?: string
) {
  const thread = threadsStore.find((t) => t.id === threadId);
  if (!thread) return null;

  if (!thread.comments) {
    thread.comments = [];
  }

  const newComment: ForumComment = {
    id: `comment-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    threadId,
    authorId: "user-guest",
    authorName,
    content,
    createdAt: new Date().toISOString(),
    votes: 0,
    replies: [],
  };

  if (parentCommentId) {
    const parentComment = findCommentRecursive(thread.comments, parentCommentId);
    if (parentComment) {
      if (!parentComment.replies) {
        parentComment.replies = [];
      }
      parentComment.replies.push(newComment);
    } else {
      thread.comments.push(newComment);
    }
  } else {
    thread.comments.push(newComment);
  }

  thread.commentCount = countTotalComments(thread.comments);
  logger.info("Forum", "Yeni iç içe yorum/yanıt eklendi", {
    threadId,
    commentId: newComment.id,
    parentCommentId,
  });
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

/**
 * Ağaçtaki herhangi bir derinlikteki yorumun veya alt yanıtın beğeni sayısını günceller.
 */
export async function toggleCommentVote(threadId: string, commentId: string, increment: boolean) {
  const thread = threadsStore.find((t) => t.id === threadId);
  if (!thread || !thread.comments) return null;

  const targetComment = findCommentRecursive(thread.comments, commentId);
  if (!targetComment) return null;

  targetComment.votes = Math.max(0, (targetComment.votes || 0) + (increment ? 1 : -1));
  return targetComment.votes;
}