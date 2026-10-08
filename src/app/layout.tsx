import type { Metadata } from "next";
import "./globals.css";

import { Providers } from "@/components/Providers";
import { Toaster } from "sonner";

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

        <Providers>  
          <Toaster position="bottom-right" richColors />
          {children}
        </Providers>
        
      </body>
    </html>
  );
}