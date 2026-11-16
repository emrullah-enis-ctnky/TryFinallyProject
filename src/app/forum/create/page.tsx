import Link from "next/link";
import { ArrowLeft, Send } from "lucide-react";
import { createThreadAction } from "@/features/forum/actions";

export default function CreateThreadPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Link
        href="/forum"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Foruma Dön</span>
      </Link>

      <div className="p-6 rounded-lg border border-border bg-surface text-surface-foreground shadow-sm space-y-6">
        <div className="space-y-1">
          <h1 className="text-xl font-black text-foreground">
            Yeni Konu Başlat
          </h1>
          <p className="text-xs text-muted-foreground">
            Sorunu veya tartışmak istediğin konuyu toplulukla paylaş.
          </p>
        </div>

        <form action={createThreadAction} className="space-y-4">
          <div className="space-y-1.5">
            <label
              htmlFor="title"
              className="text-xs font-bold text-foreground"
            >
              Başlık
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              placeholder="Örn: JavaScript'te async/await nasıl çalışır?"
              className="w-full p-2.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-primary text-sm"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="category"
              className="text-xs font-bold text-foreground"
            >
              Kategori
            </label>
            <select
              id="category"
              name="category"
              defaultValue="genel"
              className="w-full p-2.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-primary text-sm"
            >
              <option value="genel">Genel</option>
              <option value="algoritmalar">Algoritmalar</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="soru-cevap">Soru &amp; Cevap</option>
              <option value="hata-yardim">Hata Yardım</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="content"
              className="text-xs font-bold text-foreground"
            >
              İçerik
            </label>
            <textarea
              id="content"
              name="content"
              rows={6}
              required
              placeholder="Sorunu detaylıca açıkla, varsa kod örneğini paylaş..."
              className="w-full p-3 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-primary text-sm resize-none"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="tags" className="text-xs font-bold text-foreground">
              Etiketler (virgülle ayırın)
            </label>
            <input
              id="tags"
              name="tags"
              type="text"
              placeholder="Örn: javascript, async, başlangıç"
              className="w-full p-2.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-primary text-sm"
            />
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-xs font-semibold cursor-pointer hover:opacity-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Konuyu Yayınla</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
