import Link from "next/link";
import { signIn } from "@/auth";
import { Code2, Zap } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      {/* Geri Dönüş Linki */}
      <Link 
        href="/" 
        className="absolute top-8 left-8 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        ← Ana Sayfaya Dön
      </Link>

      <div className="w-full max-w-md bg-surface border border-border rounded-2xl shadow-xl p-8 space-y-6 text-center">
        
        {/* Logo ve Başlık */}
        <div className="space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-2">
            <Code2 className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-surface-foreground tracking-tight">
            Try<span className="text-primary">Finally</span>'e Hoş Geldin
          </h1>
          <p className="text-sm text-muted-foreground">
            Topluluğa katılmak ve ilerlemeni kaydetmek için giriş yap.
          </p>
        </div>

        {/* Butonlar Grubu */}
        <div className="space-y-4 pt-2">
          {/* 1. Google Giriş Butonu */}
          <form
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: "/user" });
            }}
          >
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-foreground text-background font-medium py-3 px-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google ile Devam Et
            </button>
          </form>

          {/* Ayırıcı Çizgi */}
          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-border"></div>
            <span className="flex-shrink-0 mx-4 text-xs text-muted-foreground uppercase tracking-wider">veya</span>
            <div className="flex-grow border-t border-border"></div>
          </div>

          {/* 2. Test Girişi Butonu (Sadece Geliştirme Ortamında İşinize Yarar) */}
          <form
            action={async () => {
              "use server";
              // "credentials" sağlayıcısını çağırıyoruz
              await signIn("credentials", { redirectTo: "/user" });
            }}
          >
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-secondary text-secondary-foreground font-medium py-3 px-4 rounded-xl hover:bg-secondary/80 border border-border transition-colors shadow-sm"
            >
              <Zap className="w-5 h-5 text-accent" />
              Test Hesabı ile Hızlı Giriş
            </button>
          </form>
        </div>

        <div className="text-xs text-muted-foreground pt-4 border-t border-border/50">
          Giriş yaparak Hizmet Şartlarımızı ve Gizlilik Politikamızı kabul etmiş olursun.
        </div>
      </div>
    </div>
  );
}