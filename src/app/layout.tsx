import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Code2, MessageSquare, BookOpen, User, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "TryFinally — Yeni Başlayanlar İçin Kodlama ve Topluluk Platformu",
  description: "Tarayıcı tabanlı güvenli algoritma pratikleri, Google Gemini yapay zeka rehberliği ve açık kaynaklı topluluk forumu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body className="min-h-screen bg-background text-foreground flex flex-col antialiased">
        {/* Üst Gezinme Çubuğu (Navbar) */}
        <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 rounded-lg bg-primary text-primary-foreground font-black text-lg tracking-tight group-hover:scale-105 transition-transform">
                TF
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-foreground">
                  Try<span className="text-primary">Finally</span>
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">
                  Açık Kaynak Kodlama
                </span>
              </div>
            </Link>

            {/* Navigasyon Linkleri */}
            <nav className="flex items-center gap-1 sm:gap-2">
              <Link
                href="/puzzles"
                className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <Code2 className="w-4 h-4 text-primary" />
                <span>Sorular</span>
              </Link>
              <Link
                href="/forum"
                className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-accent" />
                <span>Forum</span>
              </Link>
              <Link
                href="/learn"
                className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <BookOpen className="w-4 h-4 text-primary" />
                <span>Öğren</span>
              </Link>
              <Link
                href="/profile"
                className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <User className="w-4 h-4" />
                <span>Profil</span>
              </Link>
            </nav>

            {/* AI Rozeti ve Durum */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Gemini 3.8 Flash</span>
              </div>
            </div>
          </div>
        </header>

        {/* Ana Sayfa İçeriği */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

        {/* Alt Bilgi (Footer) */}
        <footer className="border-t border-border bg-surface text-muted-foreground text-xs py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} TryFinally — GNU General Public License v3.0 (GPL-3.0)</p>
            <div className="flex items-center gap-4">
              <span>Sıfır Sunucu Maliyetli Tarayıcı Koşturucu</span>
              <span>•</span>
              <span>Google Gemini AI Rehberliği</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
