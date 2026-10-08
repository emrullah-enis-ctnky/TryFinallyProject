'use client';

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react"; 
import { toast } from "sonner"; 

export function SignOutButton() {
  const handleSignOut = async () => {
    toast.info("Çıkış yapılıyor...");
    
    await signOut({ callbackUrl: "/" }); 
  };

  return (
    <button
      onClick={handleSignOut}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-destructive bg-destructive/10 hover:bg-destructive/20 border border-destructive/20 rounded-md transition-colors"
    >
      <LogOut className="w-4 h-4" />
      <span>Çıkış Yap</span>
    </button>
  );
}