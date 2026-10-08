import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TryFinally — Yeni Başlayanlar İçin Kodlama ve Topluluk Platformu",
  description: "Yazılıma yeni başlayanlar için kodlama pratikleri ve topluluk alanı.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body className="min-h-screen bg-background text-foreground flex flex-col antialiased overflow-x-hidden">
        {/* Tüm sayfalar direkt body'nin içine render edilecek */}
        {children}
      </body>
    </html>
  );
}