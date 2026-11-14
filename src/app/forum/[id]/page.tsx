import Link from "next/link";
import { ArrowLeft, CheckCircle2, User, AlertCircle, Send } from "lucide-react";
import { getThreadById } from "@/features/forum/service";
import { addCommentAction } from "@/features/forum/actions";
import { UpvoteButton, ForumCommentsSection } from "@/features/forum/ui";

export const dynamic = "force-dynamic";

interface ThreadDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ThreadDetailPage({ params }: ThreadDetailPageProps) {
  const { id } = await params;
  const thread = await getThreadById(id);

  if (!thread) {
    return (
      <div className="max-w-4xl mx-auto py-16 text-center space-y-4">
        <div className="flex justify-center text-muted-foreground">
          <AlertCircle className="w-12 h-12" />
        </div>
        <h2 className="text-xl font-bold text-foreground">Konu Bulunamadı</h2>
        <p className="text-sm text-muted-foreground">
          Aradığınız tartışma başlığı silinmiş veya mevcut değil olabilir.
        </p>
        <div>
          <Link
            href="/forum"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-95 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Foruma Geri Dön
          </Link>
        </div>
      </div>
    );
  }

  const comments = thread.comments || [];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Link
        href="/forum"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Foruma Dön</span>
      </Link>

      {/* Ana Başlık Kartı */}
      <div className="p-6 rounded-lg border border-border bg-surface text-surface-foreground shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground font-semibold uppercase">
              {thread.category}
            </span>
            {thread.isResolved && (
              <span className="flex items-center gap-1 text-accent font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Çözüldü
              </span>
            )}
          </div>
          <span className="text-xs text-muted-foreground font-mono">
            Soru #{thread.id}
          </span>
        </div>

        <h1 className="text-2xl font-black text-foreground">{thread.title}</h1>

        <div className="flex items-center gap-3 text-xs text-muted-foreground border-b border-border pb-4">
          <div className="flex items-center gap-1.5 font-medium text-foreground">
            <User className="w-4 h-4 text-primary" />
            <span>{thread.authorName}</span>
          </div>
          <span>•</span>
          <span>{new Date(thread.createdAt).toLocaleDateString("tr-TR")}</span>
        </div>

        <div className="prose prose-sm text-foreground/90 leading-relaxed space-y-3 whitespace-pre-wrap">
          {thread.content}
        </div>

        {thread.tags && thread.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {thread.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded bg-secondary/60 text-muted-foreground font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <UpvoteButton threadId={thread.id} initialVotes={thread.votes} showLabel />
        </div>
      </div>

      {/* Etkileşimli Yorumlar ve Alt Yanıtlar Bölümü */}
      <ForumCommentsSection threadId={thread.id} comments={comments} />

      {/* Ana Konuya Yeni Yanıt Formu */}
      <form
        action={async (formData: FormData) => {
          "use server";
          const content = formData.get("content")?.toString();
          if (content?.trim()) {
            await addCommentAction(thread.id, content.trim());
          }
        }}
        className="p-4 rounded-lg border border-border bg-surface space-y-3"
      >
        <h3 className="text-xs font-bold text-foreground">Sen de Yanıtla</h3>
        <textarea
          name="content"
          placeholder="Düşüncelerini ve yardımını buraya yaz..."
          rows={3}
          required
          className="w-full p-3 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-primary text-sm resize-none"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-primary text-primary-foreground text-xs font-semibold cursor-pointer hover:opacity-95"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Yanıtı Gönder</span>
          </button>
        </div>
      </form>
    </div>
  );
}