"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, CheckCircle, Clock, ArrowRight, Code2 } from "lucide-react";

export default function LearnPage() {
  const [selectedTopic, setSelectedTopic] = useState("algoritma-nedir");

  return (
    <div className="space-y-6">
      {/* Üst Başlık */}
      <div className="border-b border-border pb-4">
        <h1 className="text-3xl font-extrabold text-foreground flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-primary" />
          <span>Öğrenme Yol Haritası</span>
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Sıfırdan algoritmik düşünceye adım adım rehberlik eden başlangıç müfredatı.
        </p>
      </div>

      {/* 2 Kolonlu Düzen: Sol = Konu Ağacı, Sağ = İçerik Okuyucu */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[580px]">
        {/* SOL KOLON: Konu Haritası (4 Kolon) */}
        <div className="lg:col-span-4 rounded-lg border border-border bg-surface p-4 space-y-4">
          <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
            Müfredat Adımları
          </h2>

          {/* Modül 1 */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-foreground">1. Temel Algoritmik Düşünce</h3>
            <div className="space-y-1">
              <button
                onClick={() => setSelectedTopic("algoritma-nedir")}
                className={`w-full flex items-center justify-between p-2.5 rounded-md text-xs font-medium text-left transition-colors cursor-pointer ${
                  selectedTopic === "algoritma-nedir"
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "hover:bg-secondary text-foreground"
                }`}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-accent" />
                  <span>Algoritma Nedir?</span>
                </div>
                <span className="text-[10px] opacity-80">10 dk</span>
              </button>

              <button
                onClick={() => setSelectedTopic("big-o")}
                className={`w-full flex items-center justify-between p-2.5 rounded-md text-xs font-medium text-left transition-colors cursor-pointer ${
                  selectedTopic === "big-o"
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "hover:bg-secondary text-foreground"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full border border-muted-foreground/40" />
                  <span>Büyük O (Big-O) Notasyonu</span>
                </div>
                <span className="text-[10px] opacity-80">15 dk</span>
              </button>
            </div>
          </div>

          {/* Modül 2 */}
          <div className="space-y-2 pt-3 border-t border-border">
            <h3 className="text-sm font-bold text-foreground">2. Diziler ve Göstericiler</h3>
            <div className="space-y-1">
              <button
                onClick={() => setSelectedTopic("two-pointers")}
                className={`w-full flex items-center justify-between p-2.5 rounded-md text-xs font-medium text-left transition-colors cursor-pointer ${
                  selectedTopic === "two-pointers"
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "hover:bg-secondary text-foreground"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full border border-muted-foreground/40" />
                  <span>İki Gösterici (Two Pointers)</span>
                </div>
                <span className="text-[10px] opacity-80">20 dk</span>
              </button>
            </div>
          </div>
        </div>

        {/* SAĞ KOLON: Seçilen Konunun Okuma Paneli (8 Kolon) */}
        <div className="lg:col-span-8 rounded-lg border border-border bg-surface p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="px-2 py-0.5 rounded bg-secondary text-secondary-foreground font-semibold">
                Ders 1
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                10 Dakika Okuma
              </span>
            </div>

            <h2 className="text-2xl font-black text-foreground">
              {selectedTopic === "algoritma-nedir"
                ? "Algoritma Nedir ve Neden Önemlidir?"
                : selectedTopic === "big-o"
                ? "Büyük O (Big-O) Notasyonu ile Karmaşıklık Analizi"
                : "İki Gösterici (Two Pointers) Tekniği"}
            </h2>

            <div className="prose prose-sm text-foreground/90 leading-relaxed space-y-4 text-sm">
              <p>
                Algoritma, belirli bir problemi çözmek veya bir hedefe ulaşmak için izlenen
                sonlu ve sıralı adımlar bütünüdür. Bir kek tarifinden navigasyon haritasına kadar
                hayatın her alanında algoritmalar bulunur.
              </p>
              <div className="p-4 rounded-lg bg-secondary/50 border border-border space-y-2">
                <p className="font-bold text-foreground text-xs uppercase tracking-wide">
                  Bir Algoritmanın 3 Temel Özelliği:
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                  <li><strong>Girdi (Input):</strong> İşlenecek veriler.</li>
                  <li><strong>Belirlilik:</strong> Her adımın net ve şüpheye yer bırakmayacak biçimde olması.</li>
                  <li><strong>Sonluluk:</strong> Sonsuz döngüye girmeden belirli sayıda adımda bitmesi.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Alt Eylemler */}
          <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/puzzles/iki-sayinin-toplami"
              className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
            >
              <Code2 className="w-4 h-4" />
              <span>Bu konunun pratik sorusunu çöz (İki Sayının Toplamı)</span>
            </Link>

            <button className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-primary text-primary-foreground text-xs font-semibold hover:opacity-95 cursor-pointer">
              <span>Sıradaki Konuya Geç</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
