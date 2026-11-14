import { Navbar } from "@/components/ui/Navbar";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen w-full">

      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-surface/90 backdrop-blur-md">
        <Navbar />
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8">
        {children}
      </main>

      <footer className="border-t border-border bg-surface text-muted-foreground text-xs py-6 mt-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} TryFinally — Birlikte öğreniyoruz.</p>
        </div>
      </footer>
    </div>
  );
}