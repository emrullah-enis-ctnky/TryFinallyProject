"use client";

import React, { useState, useLayoutEffect, useEffect } from "react";
import Link from "next/link";
import type { ForumThread, ForumComment } from "./types";
import {
  MessageSquare,
  ThumbsUp,
  Tag,
  CheckCircle2,
  Search,
  X,
  CornerDownRight,
  Send,
} from "lucide-react";
import {
  toggleVoteAction,
  toggleCommentVoteAction,
  addCommentAction,
} from "./actions";

interface UpvoteButtonProps {
  threadId: string;
  initialVotes: number;
  showLabel?: boolean;
}

export const UpvoteButton: React.FC<UpvoteButtonProps> = ({
  threadId,
  initialVotes,
  showLabel = false,
}) => {
  const [votes, setVotes] = useState(initialVotes);
  const [hasVoted, setHasVoted] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const storageKey = `tryfinally_voted_${threadId}`;

  useEffect(() => {
    setVotes(initialVotes);
  }, [initialVotes]);

  useLayoutEffect(() => {
    const savedVote = localStorage.getItem(storageKey);
    if (savedVote === "true") {
      setHasVoted(true);
    }
  }, [storageKey]);

  const handleVote = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isPending) return;

    const nextVoted = !hasVoted;
    setHasVoted(nextVoted);
    setVotes((prev) => Math.max(0, prev + (nextVoted ? 1 : -1)));
    setIsPending(true);

    if (nextVoted) {
      localStorage.setItem(storageKey, "true");
    } else {
      localStorage.removeItem(storageKey);
    }

    try {
      const serverVotes = await toggleVoteAction(threadId, nextVoted);
      if (typeof serverVotes === "number") {
        setVotes(serverVotes);
      }
    } catch (error) {
      setHasVoted(!nextVoted);
      setVotes((prev) => Math.max(0, prev + (!nextVoted ? 1 : -1)));
      if (!nextVoted) {
        localStorage.setItem(storageKey, "true");
      } else {
        localStorage.removeItem(storageKey);
      }
      console.error("Oylama hatası:", error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleVote}
      disabled={isPending}
      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold cursor-pointer transition-colors ${
        hasVoted
          ? "bg-primary text-primary-foreground"
          : "bg-secondary/70 text-foreground hover:bg-secondary"
      }`}
    >
      <ThumbsUp className={`w-3.5 h-3.5 ${hasVoted ? "text-primary-foreground" : "text-primary"}`} />
      <span>{votes}</span>
      {showLabel && <span>Beğeni</span>}
    </button>
  );
};

interface CommentUpvoteButtonProps {
  threadId: string;
  commentId: string;
  initialVotes: number;
}

export const CommentUpvoteButton: React.FC<CommentUpvoteButtonProps> = ({
  threadId,
  commentId,
  initialVotes,
}) => {
  const [votes, setVotes] = useState(initialVotes || 0);
  const [hasVoted, setHasVoted] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const storageKey = `tryfinally_voted_comment_${commentId}`;

  useEffect(() => {
    setVotes(initialVotes || 0);
  }, [initialVotes]);

  useLayoutEffect(() => {
    const savedVote = localStorage.getItem(storageKey);
    if (savedVote === "true") {
      setHasVoted(true);
    }
  }, [storageKey]);

  const handleVote = async () => {
    if (isPending) return;

    const nextVoted = !hasVoted;
    setHasVoted(nextVoted);
    setVotes((prev) => Math.max(0, prev + (nextVoted ? 1 : -1)));
    setIsPending(true);

    if (nextVoted) {
      localStorage.setItem(storageKey, "true");
    } else {
      localStorage.removeItem(storageKey);
    }

    try {
      const serverVotes = await toggleCommentVoteAction(threadId, commentId, nextVoted);
      if (typeof serverVotes === "number") {
        setVotes(serverVotes);
      }
    } catch (error) {
      setHasVoted(!nextVoted);
      setVotes((prev) => Math.max(0, prev + (!nextVoted ? 1 : -1)));
      if (!nextVoted) {
        localStorage.setItem(storageKey, "true");
      } else {
        localStorage.removeItem(storageKey);
      }
      console.error("Yorum oylama hatası:", error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleVote}
      disabled={isPending}
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold cursor-pointer transition-colors ${
        hasVoted
          ? "bg-primary text-primary-foreground"
          : "bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary"
      }`}
    >
      <ThumbsUp className="w-3 h-3" />
      <span>{votes}</span>
    </button>
  );
};

// Ağaçtaki toplam yorum sayısını özyinelemeli hesaplar
function countCommentsTree(comments: ForumComment[]): number {
  return comments.reduce(
    (acc, c) => acc + 1 + (c.replies ? countCommentsTree(c.replies) : 0),
    0
  );
}

interface CommentItemProps {
  threadId: string;
  comment: ForumComment;
  depth?: number;
  replyingToId: string | null;
  setReplyingToId: (id: string | null) => void;
  replyText: string;
  setReplyText: (text: string) => void;
  isSubmittingReply: boolean;
  onReplySubmit: (e: React.FormEvent, parentCommentId: string) => void;
}

const CommentItem: React.FC<CommentItemProps> = ({
  threadId,
  comment,
  depth = 0,
  replyingToId,
  setReplyingToId,
  replyText,
  setReplyText,
  isSubmittingReply,
  onReplySubmit,
}) => {
  const isReplying = replyingToId === comment.id;
  // Ekranın sağa doğru aşırı daralmasını önlemek için girintiyi 5. seviyede sabitle
  const shouldIndent = depth > 0 && depth <= 5;

  return (
    <div
      className={
        depth === 0
          ? "p-4 rounded-lg border border-border bg-surface space-y-3 text-sm"
          : `${shouldIndent ? "ml-4 pl-3.5 border-l-2 border-border" : "mt-2"} pt-2 space-y-2.5 text-sm`
      }
    >
      <div
        className={
          depth > 0
            ? "p-3 rounded-md bg-secondary/25 border border-border/60 space-y-2"
            : "space-y-2"
        }
      >
        {/* Yazar & Saat */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">{comment.authorName}</span>
          <span>
            {new Date(comment.createdAt).toLocaleTimeString("tr-TR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>

        {/* İçerik */}
        <p className="text-foreground/90 whitespace-pre-wrap text-xs sm:text-sm">
          {comment.content}
        </p>

        {/* Alt Aksiyonlar (Beğen & Yanıtla) */}
        <div className="flex items-center gap-3 pt-1">
          <CommentUpvoteButton
            threadId={threadId}
            commentId={comment.id}
            initialVotes={comment.votes}
          />
          <button
            type="button"
            onClick={() => {
              if (isReplying) {
                setReplyingToId(null);
                setReplyText("");
              } else {
                setReplyingToId(comment.id);
                setReplyText("");
              }
            }}
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            <CornerDownRight className="w-3 h-3" />
            <span>{isReplying ? "Vazgeç" : "Yanıtla"}</span>
          </button>
        </div>

        {/* Yanıt Yazma Formu */}
        {isReplying && (
          <form
            onSubmit={(e) => onReplySubmit(e, comment.id)}
            className="mt-2 pl-3 border-l-2 border-primary/50 space-y-2"
          >
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder={`${comment.authorName} kullanıcısına yanıt yaz...`}
              rows={2}
              required
              autoFocus
              className="w-full p-2.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-primary text-xs resize-none"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmittingReply}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-semibold cursor-pointer hover:opacity-95 disabled:opacity-50"
              >
                <Send className="w-3 h-3" />
                <span>{isSubmittingReply ? "Gönderiliyor..." : "Yanıtı Gönder"}</span>
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Alt Yanıtları Özyinelemeli (Recursive) Olarak Çiz */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="space-y-2">
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply.id}
              threadId={threadId}
              comment={reply}
              depth={depth + 1}
              replyingToId={replyingToId}
              setReplyingToId={setReplyingToId}
              replyText={replyText}
              setReplyText={setReplyText}
              isSubmittingReply={isSubmittingReply}
              onReplySubmit={onReplySubmit}
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface ForumCommentsSectionProps {
  threadId: string;
  comments: ForumComment[];
}

export const ForumCommentsSection: React.FC<ForumCommentsSectionProps> = ({
  threadId,
  comments,
}) => {
  const [replyingToId, setReplyingToId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const [isSubmittingReply, setIsSubmittingReply] = useState(false);

  const totalCount = countCommentsTree(comments);

  const handleReplySubmit = async (e: React.FormEvent, parentCommentId: string) => {
    e.preventDefault();
    if (!replyText.trim() || isSubmittingReply) return;

    setIsSubmittingReply(true);
    try {
      await addCommentAction(threadId, replyText.trim(), parentCommentId);
      setReplyText("");
      setReplyingToId(null);
    } catch (error) {
      console.error("Yanıt gönderme hatası:", error);
    } finally {
      setIsSubmittingReply(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold text-foreground flex items-center gap-2">
        <MessageSquare className="w-4 h-4 text-primary" />
        <span>Topluluk Yanıtları ({totalCount})</span>
      </h2>

      {comments.length === 0 ? (
        <div className="p-6 rounded-lg border border-border bg-surface/50 text-center text-xs text-muted-foreground">
          Henüz yanıt yazılmamış. İlk yanıtı sen ver!
        </div>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <CommentItem
              key={comment.id}
              threadId={threadId}
              comment={comment}
              depth={0}
              replyingToId={replyingToId}
              setReplyingToId={setReplyingToId}
              replyText={replyText}
              setReplyText={setReplyText}
              isSubmittingReply={isSubmittingReply}
              onReplySubmit={handleReplySubmit}
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface ForumThreadCardProps {
  thread: ForumThread;
  onClick?: (id: string) => void;
}

export const ForumThreadCard: React.FC<ForumThreadCardProps> = ({ thread, onClick }) => {
  return (
    <div
      onClick={() => onClick?.(thread.id)}
      className="p-5 rounded-lg border border-border bg-surface text-surface-foreground hover:border-primary/50 transition-colors cursor-pointer shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground font-medium uppercase tracking-wider">
              {thread.category}
            </span>
            {thread.isResolved && (
              <span className="flex items-center gap-1 text-xs text-accent font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Çözüldü
              </span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
            {thread.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {thread.content}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {thread.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 text-sm text-muted-foreground shrink-0">
          <UpvoteButton threadId={thread.id} initialVotes={thread.votes} />
          <span className="flex items-center gap-1">
            <MessageSquare className="w-4 h-4" />
            {thread.commentCount} yanıt
          </span>
        </div>
      </div>
    </div>
  );
};

interface ForumThreadListProps {
  initialThreads: ForumThread[];
}

const CATEGORIES = [
  { label: "Tüm Başlıklar", value: "ALL" },
  { label: "Genel", value: "genel" },
  { label: "Algoritmalar", value: "algoritmalar" },
  { label: "JavaScript", value: "javascript" },
  { label: "Python", value: "python" },
];

export const ForumThreadList: React.FC<ForumThreadListProps> = ({ initialThreads }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredThreads = initialThreads.filter((thread) => {
    const matchesCategory =
      selectedCategory === "ALL" ||
      thread.category.toLowerCase() === selectedCategory.toLowerCase();

    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      thread.title.toLowerCase().includes(query) ||
      thread.content.toLowerCase().includes(query) ||
      thread.authorName.toLowerCase().includes(query) ||
      thread.tags.some((tag) => tag.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Konularda veya etiketlerde ara..."
            className="w-full pl-9 pr-8 py-2 rounded-lg bg-surface border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-2.5 text-muted-foreground hover:text-foreground cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 cursor-pointer transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {filteredThreads.length === 0 ? (
        <div className="p-10 rounded-lg border border-border bg-surface/50 text-center space-y-2">
          <p className="text-sm font-semibold text-foreground">
            Aramanızla eşleşen bir konu bulunamadı.
          </p>
          <p className="text-xs text-muted-foreground">
            Farklı anahtar kelimeler deneyebilir veya filtreleri sıfırlayabilirsiniz.
          </p>
          {(searchQuery || selectedCategory !== "ALL") && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("ALL");
              }}
              className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs font-semibold hover:bg-secondary/80 cursor-pointer"
            >
              Filtreleri Temizle
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredThreads.map((thread) => (
            <Link
              key={thread.id}
              href={`/forum/${thread.id}`}
              className="block p-5 rounded-lg border border-border bg-surface text-surface-foreground hover:border-primary/50 transition-all shadow-sm group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground font-medium uppercase tracking-wider">
                      {thread.category}
                    </span>
                    {thread.isResolved && (
                      <span className="flex items-center gap-1 text-xs text-accent font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Çözüldü
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground">
                      • {thread.authorName} tarafından paylaşıldı
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {thread.title}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {thread.content}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {thread.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-[11px] text-muted-foreground bg-muted px-2 py-0.5 rounded"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2 text-xs text-muted-foreground shrink-0">
                  <UpvoteButton threadId={thread.id} initialVotes={thread.votes} />
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5" />
                    {thread.commentCount} yanıt
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};