/**
 * ==============================================================================
 * TryFinally — Öğrenme Yol Haritası Tip Tanımları (Learn Types)
 * ==============================================================================
 * Adım adım algoritma ve programlama müfredatı, konu içerikleri ve ilerleme durumları.
 * ==============================================================================
 */

export interface RoadmapTopic {
  id: string;
  slug: string;
  title: string;
  description: string;
  order: number;
  durationMinutes: number;
  isCompleted?: boolean;
  contentMarkdown?: string;
  relatedProblemIds?: string[];
}

export interface RoadmapModule {
  id: string;
  title: string;
  description: string;
  order: number;
  topics: RoadmapTopic[];
}
