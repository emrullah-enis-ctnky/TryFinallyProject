import Link from "next/link"

export default function Navbar (){

    return(
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo (En Üste / Hero'ya Gider) */}
          <a href="#hero" className="font-extrabold text-xl tracking-tight text-foreground hover:opacity-90 transition-opacity">
            Try<span className="text-primary">Finally</span>
          </a>

          {/* Orta Menü (Bölümlere Kaydırır - Mobilde Gizli) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Özellikler
            </a>
            <a href="#gamification" className="text-muted-foreground hover:text-foreground transition-colors">
              Oyunlaştırma
            </a>
            <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors">
              Topluluk
            </a>
          </nav>

          {/* Sağ Menü (Auth Butonları) */}
          <div className="flex items-center gap-4">
            <Link 
              href="/login" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Giriş Yap
            </Link>
            <Link 
              href="/register" 
              className="px-5 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 shadow-sm transition-opacity"
            >
              Kayıt Ol
            </Link>
          </div>
        </div>
      
    )
}