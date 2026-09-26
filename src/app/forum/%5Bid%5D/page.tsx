"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ThumbsUp, MessageSquare, Send, CheckCircle2, User } from "lucide-react";

interface ThreadDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function ThreadDetailPage({ params }: ThreadDetailPageProps) {
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);
  const [votes, setVotes] = useState(12);
  const [hasVoted, setHasVoted] = useState(false);

  React.useEffect(() => {
    params.then(setResolvedParams);
  }, [params]);

  const handleVote = () => {
    if (!hasVoted) {
      setVotes(votes + 1);
      setHasVoted(true);
    } else {
      setVotes(votes - 1);
      setHasVoted(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Geri Dön Butonu */}
      <Link
        href="/forum"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Foruma Dön</span>
      </Link>

      {/* Ana Başlık Kartı */}
      <div className="p-6 rounded-lg border border-border bg-surface text-surface-foreground shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground font-semibold uppercase">
              Algoritmalar
            </span>
            <span className="flex items-center gap-1 text-accent font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Çözüldü
            </span>
          </div>
          <span className="text-xs text-muted-foreground font-mono">
            ID: {resolvedParams?.id || "yukleniyor..."}
          </span>
        </div>

        <h1 className="text-2xl font-black text-foreground">
          İki Sayının Toplamı (Two Sum) algoritmasında n^2 yerine O(n) nasıl yapılır?
        </h1>

        <div className="flex items-center gap-3 text-xs text-muted-foreground border-b border-border pb-4">
          <div className="flex items-center gap-1.5 font-medium text-foreground">
            <User className="w-4 h-4 text-primary" />
            <span>Ahmet Yılmaz</span>
          </div>
          <span>•</span>
          <span>Bugün paylaşıldı</span>
        </div>

        <div className="prose prose-sm text-foreground/90 leading-relaxed space-y-3">
          <p>
            Merhaba arkadaşlar, algoritma çalışırken Two Sum sorusunu çözmeye çalışıyorum.
            İç içe iki for döngüsü kurduğumda büyük dizilerde zaman aşımı alıyorum.
          </p>
          <p>
            Hash Map (Javascript Map veya Object) kullanarak bunu tek geçişte O(n) sürede
            nasıl çözebilirim? Örnek bir mantık açıklayabilir misiniz?
          </p>
        </div>

        {/* Oylama ve Aksiyon */}
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <button
            onClick={handleVote}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-colors ${
              hasVoted
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-foreground hover:bg-secondary/80"
            }`}
          >
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>{votes} Beğeni</span>
          </button>
        </div>
      </div>

      {/* Yanıtlar Bölümü */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-foreground flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-primary" />
          <span>Yanıtlar (2)</span>
        </h2>

        {/* Örnek Çözüm Yanıtı */}
        <div className="p-5 rounded-lg border border-accent/40 bg-surface text-surface-foreground space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-foreground">Zeynep Kaya</span>
              <span className="text-accent font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Kabul Edilen Çözüm
              </span>
            </div>
            <span className="text-xs text-muted-foreground">3 saat önce</span>
          </div>

          <p className="text-sm text-foreground/90 leading-relaxed">
            Harika bir soru! Dizi üzerinde gezerken, hedef sayıdan o anki sayıyı çıkararak
            ihtiyacın olan farkı (complement) hesaplayabilirsin. Eğer bu fark daha önce haritaya
            kaydedilmişse çözümü bulmuş olursun.
          </p>

          <pre className="p-3 rounded bg-secondary font-mono text-xs overflow-x-auto text-foreground">
            {`const diff = target - nums[i];\nif (map.has(diff)) return [map.get(diff), i];\nmap.set(nums[i], i);`}
          </pre>
        </div>

        {/* Yanıt Yazma Alanı (Mock) */}
        <div className="p-4 rounded-lg border border-border bg-surface space-y-3">
          <h3 className="text-xs font-bold text-foreground">Cevap Yaz</h3>
          <textarea
            placeholder="Düşüncelerinizi ve yardımınızı buraya yazın..."
            rows={3}
            className="w-full p-3 rounded-md bg-secondary/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none"
          />
          <div className="flex justify-end">
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-primary text-primary-foreground text-xs font-semibold cursor-pointer hover:opacity-95">
              <Send className="w-3.5 h-3.5" />
              <span>Yanıtı Gönder</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
