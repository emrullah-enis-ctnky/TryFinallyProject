import Link from "next/link";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Sadeleştirilmiş Ana Menü (Minimal Navbar) */}
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-surface/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-extrabold text-base tracking-tight text-foreground hover:opacity-90 transition-opacity">
            Try<span className="text-primary">Finally</span>
          </Link>

          {/* Sade Menü Linkleri */}
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link href="/puzzles" className="text-muted-foreground hover:text-foreground transition-colors">
              Sorular
            </Link>
            <Link href="/forum" className="text-muted-foreground hover:text-foreground transition-colors">
              Forum
            </Link>
            <Link href="/user/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Panelim
            </Link>
            <Link href="/user/profile" className="text-muted-foreground hover:text-foreground transition-colors">
              Profil
            </Link>
          </nav>
        </div>
      </header>

      {/* Ana Sayfa İçeriği (Senin istediğin gibi ortalanmış ve max-w-5xl sınırında) */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8">
        {children}
      </main>

      {/* Sade Alt Bilgi (Footer) */}
      <footer className="border-t border-border bg-surface text-muted-foreground text-xs py-6 mt-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} TryFinally — Yazılıma Yeni Başlayanlar İçin Topluluk Platformu</p>
          <p>Birlikte öğreniyoruz.</p>
        </div>
      </footer>
    </div>
  );
}