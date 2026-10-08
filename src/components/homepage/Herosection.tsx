import { 
  Code2,  
  Sparkles, 
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

export default function Herosection () {
    return(
        <section id="hero" className="h-[100dvh] w-full snap-start relative flex flex-col items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 dark:opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')" }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/10 via-background/60 to-background" />

          <div className="relative z-10 text-center max-w-4xl px-4 space-y-8 mt-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border shadow-sm mb-4">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground">Geleceğin Yazılımcıları İçin Geliştirildi (İşsiz kalmazsanız tabii) </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground drop-shadow-sm">
              Yazılıma İlk Adımını <span className="text-primary">Sağlam At</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Kod yazmayı ezberleyerek değil, deneyimleyerek öğren. Eğlenceli pratikler yap, takıldığın yerde yapay zekadan destek al.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/register"
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-all cursor-pointer shadow-lg shadow-primary/25 hover:scale-105"
              >
                <Code2 className="w-6 h-6" />
                <span>Hemen Başla — 250€</span>
              </Link>
            </div>
          </div>

          <a href="#features" className="absolute bottom-10 z-10 animate-bounce text-muted-foreground flex flex-col items-center gap-2 hover:text-primary transition-colors cursor-pointer">
            <span className="text-sm font-medium">Keşfet</span>
            <ChevronDown className="w-6 h-6" />
          </a>
        </section>
    )
}