import Link from "next/link";
import { MessageSquare, Plus } from "lucide-react";
import { getForumThreads } from "@/features/forum";
import { ForumThreadList } from "@/features/forum/ui";

export const dynamic = "force-dynamic";

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
        <Link
          href="/forum/create"
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-xs hover:opacity-95 transition-opacity cursor-pointer shadow-sm w-fit"
        >
          <Plus className="w-4 h-4" />
          <span>Yeni Konu Başlat</span>
        </Link>
      </div>

      {/* Etkileşimli Arama, Kategori Filtresi ve Konu Listesi */}
      <ForumThreadList initialThreads={threads} />
    </div>
  );
}