import Link from "next/link";
import { MessageSquare, Plus, Search, Tag, ThumbsUp, CheckCircle2 } from "lucide-react";
import { getForumThreads } from "@/features/forum";

export default async function ForumPage() {
  const threads = await getForumThreads();

  return (
    <div className="space-y-8">
      {/* Forum Üst Başlığı */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground flex items-center gap-3">
            <MessageSquare className="w-8 h-8 text-accent" />
            <span>Topluluk Forumu</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Yazılıma yeni başlayanların takıldığı noktaları özgürce sorduğu, birbirine yardım ettiği topluluk alanı.
          </p>
        </div>

        {/* Yeni Konu Aç Butonu */}
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-xs hover:opacity-95 transition-opacity cursor-pointer shadow-sm w-fit">
          <Plus className="w-4 h-4" />
          <span>Yeni Konu Başlat</span>
        </button>
      </div>

      {/* Arama & Kategoriler */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
          <input
            type="text"
            placeholder="Konularda veya etiketlerde ara..."
            className="w-full pl-9 pr-4 py-2 rounded-lg bg-surface border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
          <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary text-primary-foreground shrink-0 cursor-pointer">
            Tüm Başlıklar
          </button>
          <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 shrink-0 cursor-pointer">
            Algoritmalar
          </button>
          <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 shrink-0 cursor-pointer">
            JavaScript
          </button>
          <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 shrink-0 cursor-pointer">
            Python
          </button>
        </div>
      </div>

      {/* Başlık Listesi */}
      <div className="space-y-4">
        {threads.map((thread) => (
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

              {/* İstatistikler */}
              <div className="flex flex-col items-end gap-2 text-xs text-muted-foreground shrink-0">
                <span className="flex items-center gap-1 bg-secondary px-2.5 py-1 rounded-md font-semibold text-foreground">
                  <ThumbsUp className="w-3.5 h-3.5 text-primary" />
                  {thread.votes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5" />
                  {thread.commentCount} yanıt
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
