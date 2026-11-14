/**
 * ==============================================================================
 * TryFinally — Kod Editörü Teması (CodeMirror Theme)
 * ==============================================================================
 * Bu tema, uygulamanın merkezi semantik renk paleti (src/lib/theme/tokens.ts)
 * ile %100 uyumlu olacak şekilde özel olarak tasarlanmıştır.
 *
 * Ana Renk Eşleşmeleri:
 * - Background: #0a0f1d (Gece Mavisi zemin)
 * - Surface: #111827 (Kart ve panel arka planı)
 * - Primary: #6366f1 / #818cf8 (İndigo aksiyon ve anahtar kelimeler)
 * - Accent: #38bdf8 (Cyan tipler ve vurgular)
 * - Muted: #1e293b / #64748b (Pasif satır numaraları ve yorumlar)
 * - Border: #1f2937 (Kenarlıklar)
 * ==============================================================================
 */

import { EditorView } from "@codemirror/view";
import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { tags } from "@lezer/highlight";
import type { Extension } from "@codemirror/state";

/**
 * Editörün gövde, satır numarası (gutter), imleç ve seçim renkleri
 */
export const tryFinallyEditorViewTheme = EditorView.theme(
  {
    "&": {
      color: "#f8fafc",
      backgroundColor: "#0a0f1d",
      fontSize: "13px",
    },
    ".cm-content": {
      caretColor: "#818cf8",
      fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
      padding: "8px 0",
    },
    "&.cm-focused .cm-cursor": {
      borderLeftColor: "#818cf8",
      borderLeftWidth: "2px",
    },
    "&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
      backgroundColor: "rgba(99, 102, 241, 0.28) !important",
    },
    ".cm-gutters": {
      backgroundColor: "#0e1526",
      color: "#64748b",
      borderRight: "1px solid #1f2937",
      paddingRight: "4px",
    },
    ".cm-gutterElement": {
      fontSize: "12px",
    },
    ".cm-activeLine": {
      backgroundColor: "rgba(99, 102, 241, 0.08)",
    },
    ".cm-activeLineGutter": {
      backgroundColor: "rgba(99, 102, 241, 0.15)",
      color: "#a5b4fc",
      fontWeight: "bold",
    },
    ".cm-matchingBracket": {
      backgroundColor: "rgba(56, 189, 248, 0.2)",
      outline: "1px solid #38bdf8",
      color: "#ffffff !important",
    },
    ".cm-nonmatchingBracket": {
      backgroundColor: "rgba(239, 68, 68, 0.25)",
      outline: "1px solid #ef4444",
      color: "#f87171 !important",
    },
    // Otomatik Tamamlama (Autocomplete Tooltip) Açılır Pencere Stilleri
    ".cm-tooltip": {
      backgroundColor: "#111827",
      border: "1px solid #1f2937",
      borderRadius: "0.5rem",
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5)",
      overflow: "hidden",
    },
    ".cm-tooltip-autocomplete ul": {
      fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
      fontSize: "12px",
      maxHeight: "220px",
    },
    ".cm-tooltip-autocomplete ul li": {
      padding: "5px 10px",
      color: "#f8fafc",
    },
    ".cm-tooltip-autocomplete ul li[aria-selected]": {
      backgroundColor: "#1e293b",
      color: "#ffffff",
    },
    ".cm-completionLabel": {
      fontWeight: "500",
    },
    ".cm-completionMatchedText": {
      color: "#38bdf8",
      textDecoration: "none",
      fontWeight: "bold",
    },
    ".cm-completionDetail": {
      color: "#94a3b8",
      fontStyle: "italic",
      marginLeft: "10px",
      fontSize: "11px",
    },
  },
  { dark: true }
);

/**
 * Kod sözdizimi renklendirmesi (Syntax Highlighting)
 */
export const tryFinallyHighlightStyle = syntaxHighlighting(
  HighlightStyle.define([
    // Anahtar Kelimeler (for, while, if, class, return, def) -> Canlı İndigo
    { tag: [tags.keyword, tags.controlKeyword, tags.definitionKeyword, tags.modifier], color: "#818cf8", fontWeight: "bold" },

    // Tipler ve Sınıflar (int, vector, string, List, Map) -> Buz Mavisi / Cyan Vurgusu
    { tag: [tags.typeName, tags.className, tags.standard(tags.typeName)], color: "#38bdf8" },

    // Fonksiyon ve Metot İsimleri -> Açık Mavi
    { tag: [tags.function(tags.variableName), tags.function(tags.propertyName), tags.definition(tags.function(tags.variableName))], color: "#60a5fa" },

    // Metin ve Karakter Katarları (Strings) -> Zümrüt Yeşili
    { tag: [tags.string, tags.character], color: "#34d399" },

    // Sayısal Değerler (Numbers) -> Pembe / Magenta
    { tag: tags.number, color: "#f472b6" },

    // Mantıksal Değerler & Sabitler (true, false, null, nullptr, None) -> Mercan / Gül Kurusu
    { tag: [tags.bool, tags.null, tags.special(tags.variableName)], color: "#fb7185", fontWeight: "600" },

    // Yorum Satırları (Comments) -> Soluk Gri & İtalik
    { tag: [tags.comment, tags.lineComment, tags.blockComment], color: "#64748b", fontStyle: "italic" },

    // Operatörler ve Noktalama İşaretleri (+, -, =, ;, :) -> Nötr Gri
    { tag: [tags.operator, tags.punctuation, tags.separator, tags.bracket], color: "#94a3b8" },

    // Değişken İsimleri -> Parlak Beyazımsı
    { tag: [tags.variableName, tags.propertyName], color: "#f1f5f9" },
  ])
);

/**
 * Hem görünüm hem renklendirmeyi birleştiren tam tema eklentisi
 */
export const tryFinallyEditorTheme: Extension = [
  tryFinallyEditorViewTheme,
  tryFinallyHighlightStyle,
];
