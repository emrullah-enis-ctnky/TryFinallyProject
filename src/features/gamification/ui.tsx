"use client";

/**
 * ==============================================================================
 * TryFinally — Oyunlaştırma UI Bileşenleri (Gamification UI)
 * ==============================================================================
 * Kullanıcı profil kartı, puan özeti ve kazanılan rozetler listesi.
 * ==============================================================================
 */

import React from "react";
import type { UserStats } from "./types";
import { Award, Flame, CheckCircle, MessageSquare } from "lucide-react";

interface UserStatsCardProps {
  stats: UserStats;
}

export const UserStatsCard: React.FC<UserStatsCardProps> = ({ stats }) => {
  return (
    <div className="p-6 rounded-lg border border-border bg-surface text-surface-foreground shadow-sm">
      <h3 className="text-base font-bold text-foreground mb-4">Geliştirici İstatistikleri</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Toplam Puan */}
        <div className="p-4 rounded-lg bg-secondary/50 border border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
            <Award className="w-4 h-4 text-primary" />
            <span>Toplam Puan</span>
          </div>
          <span className="text-2xl font-extrabold text-foreground">{stats.totalPoints}</span>
        </div>

        {/* Çözülen Soru */}
        <div className="p-4 rounded-lg bg-secondary/50 border border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span>Çözülen Soru</span>
          </div>
          <span className="text-2xl font-extrabold text-foreground">{stats.solvedProblemsCount}</span>
        </div>

        {/* Güncel Streak */}
        <div className="p-4 rounded-lg bg-secondary/50 border border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
            <Flame className="w-4 h-4 text-destructive" />
            <span>Günlük Seri</span>
          </div>
          <span className="text-2xl font-extrabold text-foreground">{stats.currentStreakDays} Gün</span>
        </div>

        {/* Forum İtibarı */}
        <div className="p-4 rounded-lg bg-secondary/50 border border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span>Topluluk Puanı</span>
          </div>
          <span className="text-2xl font-extrabold text-foreground">{stats.forumReputation}</span>
        </div>
      </div>
    </div>
  );
};
