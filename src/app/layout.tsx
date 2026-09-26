import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TryFinally — Yeni Başlayanlar İçin Kodlama ve Topluluk Platformu",
  description: "Tarayıcı tabanlı güvenli algoritma pratikleri, akıllı kod asistanı ve açık kaynaklı topluluk forumu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body className="min-h-screen bg-background text-foreground flex flex-col antialiased">
        {/* Sadeleştirilmiş Ana Menü (Minimal Navbar) */}
        <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-surface/90 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="font-extrabold text-base tracking-tight text-foreground hover:opacity-90 transition-opacity">
              Try<span className="text-primary">Finally</span>
            </Link>

            {/* Sade Menü Linkleri */}
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link
                href="/puzzles"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Sorular
              </Link>
              <Link
                href="/forum"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Forum
              </Link>
              <Link
                href="/learn"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Öğren
              </Link>
              <Link
                href="/profile"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Profil
              </Link>
            </nav>
          </div>
        </header>

        {/* Ana Sayfa İçeriği */}
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
          {children}
        </main>

        {/* Alt Bilgi (Footer) */}
        <footer className="border-t border-border bg-surface text-muted-foreground text-xs py-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} TryFinally — GNU General Public License v3.0 (GPL-3.0)</p>
            <div className="flex items-center gap-4">
              <span>Kurulumsuz Kodlama</span>
              <span>•</span>
              <span>Akıllı Rehberlik</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
