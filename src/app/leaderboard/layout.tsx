import { Navbar } from "@/components/ui/Navbar";

export default function LeaderboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-surface/90 backdrop-blur-md">
        <Navbar />
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6">
        {children}
      </main>

      <footer className="mt-auto border-t border-border bg-surface py-6 text-xs text-muted-foreground">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6">
          <p>© {new Date().getFullYear()} TryFinally — Birlikte öğreniyoruz.</p>
        </div>
      </footer>
    </div>
  );
}
