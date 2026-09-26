"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Play, Send, Sparkles, Terminal, CheckCircle2, Lightbulb } from "lucide-react";
import { DifficultyBadge } from "@/features/puzzles/ui";

interface PuzzleDetailProps {
  params: Promise<{ slug: string }>;
}

export default function PuzzleDetailPage({ params }: PuzzleDetailProps) {
  const [resolvedParams, setResolvedParams] = useState<{ slug: string } | null>(null);
  const [language, setLanguage] = useState<"javascript" | "python">("javascript");
  const [showHint, setShowHint] = useState(false);

  React.useEffect(() => {
    params.then(setResolvedParams);
  }, [params]);

  const jsStarter = `function topla(a, b) {
  // Çözümünü buraya yaz:
  return a + b;
}`;

  const pyStarter = `def topla(a, b):
    # Çözümünü buraya yaz:
    return a + b`;

  return (
    <div className="space-y-4">
      {/* Üst Bar: Geri Dön ve Başlık */}
      <div className="flex items-center justify-between">
        <Link
          href="/puzzles"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Sorulara Dön</span>
        </Link>
        <span className="text-xs text-muted-foreground">
          {resolvedParams?.slug || "..."}
        </span>
      </div>

      {/* Bölünmüş Ekran (Split Screen Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[580px]">
        {/* SOL PANEL: Soru Açıklaması ve Test Senaryoları (5 Kolon) */}
        <div className="lg:col-span-5 rounded-lg border border-border bg-surface text-surface-foreground p-6 flex flex-col justify-between space-y-6 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <DifficultyBadge difficulty="kolay" />
              <span className="text-xs text-muted-foreground">Temel Pratik</span>
            </div>

            <h1 className="text-2xl font-black text-foreground">İki Sayıyı Toplama</h1>

            <div className="prose prose-sm text-muted-foreground leading-relaxed space-y-3">
              <p>
                Sana verilen iki sayıyı toplayıp sonucunu ekrana veren basit bir fonksiyon yaz.
              </p>
              <p className="text-xs">
                Örneğin girdi olarak <code className="text-accent bg-secondary px-1.5 py-0.5 rounded">3</code> ve{" "}
                <code className="text-accent bg-secondary px-1.5 py-0.5 rounded">5</code> verildiğinde, fonksiyonun{" "}
                <code className="text-accent bg-secondary px-1.5 py-0.5 rounded">8</code> değerini döndürmelidir.
              </p>
            </div>

            {/* Örnek Senaryo */}
            <div className="p-3.5 rounded-lg bg-secondary/50 border border-border space-y-1.5 text-xs font-mono">
              <p className="font-semibold text-foreground">Örnek 1:</p>
              <p className="text-muted-foreground">Girdi: a = 3, b = 5</p>
              <p className="text-accent">Çıktı: 8</p>
            </div>
          </div>

          {/* İpucu Butonu & Akıllı Rehber */}
          <div className="pt-4 border-t border-border space-y-3">
            <button
              onClick={() => setShowHint(!showHint)}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground text-xs font-semibold cursor-pointer transition-colors"
            >
              <Lightbulb className="w-4 h-4 text-accent" />
              <span>{showHint ? "İpucunu Gizle" : "Akıllı İpucu İste"}</span>
            </button>

            {showHint && (
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 text-xs text-foreground space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-primary">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Akıllı Çözüm İpucu:</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  İki sayıyı toplamak için <code className="text-primary font-bold">+</code> işaretini kullanabilirsin: <code className="bg-secondary px-1 rounded">return a + b;</code>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* SAĞ PANEL: Kod Editör Alanı ve Konsol (7 Kolon) */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          {/* Editör Üst Barı */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-surface border border-border">
            {/* Dil Seçicisi */}
            <div className="flex items-center gap-1 bg-secondary p-1 rounded-md">
              <button
                onClick={() => setLanguage("javascript")}
                className={`px-3 py-1 rounded text-xs font-semibold cursor-pointer transition-colors ${
                  language === "javascript"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                JavaScript
              </button>
              <button
                onClick={() => setLanguage("python")}
                className={`px-3 py-1 rounded text-xs font-semibold cursor-pointer transition-colors ${
                  language === "python"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Python
              </button>
            </div>

            {/* Çalıştır / Gönder Butonları (Taslak) */}
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary hover:bg-secondary/80 text-foreground text-xs font-semibold cursor-pointer transition-colors">
                <Play className="w-3.5 h-3.5 text-accent" />
                <span>Çalıştır</span>
              </button>
              <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-md bg-primary hover:opacity-95 text-primary-foreground text-xs font-semibold cursor-pointer transition-opacity">
                <Send className="w-3.5 h-3.5" />
                <span>Gönder</span>
              </button>
            </div>
          </div>

          {/* Kodlama Alanı (Hafif ve Modern Mock Editör) */}
          <div className="flex-1 min-h-[260px] rounded-lg border border-border bg-[#0d1117] text-[#c9d1d9] font-mono text-xs p-4 overflow-x-auto relative">
            <div className="text-[11px] text-muted-foreground/60 select-none pb-2 border-b border-border/40 mb-3 flex items-center justify-between">
              <span>kod.{language === "javascript" ? "js" : "py"}</span>
              <span>UTF-8</span>
            </div>
            <textarea
              defaultValue={language === "javascript" ? jsStarter : pyStarter}
              key={language}
              spellCheck={false}
              className="w-full h-[200px] bg-transparent resize-none focus:outline-none font-mono text-xs leading-relaxed text-foreground/90"
            />
          </div>

          {/* Alt Panel: Konsol Çıktısı */}
          <div className="rounded-lg border border-border bg-surface text-surface-foreground overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-secondary border-b border-border text-xs font-medium">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-primary" />
                <span>Sonuç Konsolu</span>
              </div>
              <span className="flex items-center gap-1 text-accent font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                2 / 2 Test Başarılı
              </span>
            </div>
            <div className="p-4 font-mono text-xs space-y-1 text-muted-foreground">
              <p className="text-foreground">✓ Test 1: a = 3, b = 5 -&gt; Çıktı: 8 (Doğru)</p>
              <p className="text-foreground">✓ Test 2: a = 10, b = 20 -&gt; Çıktı: 30 (Doğru)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
