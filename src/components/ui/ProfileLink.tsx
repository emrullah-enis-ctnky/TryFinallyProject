'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function ProfileLink() {
  const pathname = usePathname();
  const isActive = pathname === "/user/profile";

  return (
    <Link href="/user/profile" className="relative group flex items-center">
      
      <div 
        className={`relative w-9 h-9 rounded-full overflow-hidden border-2 transition-all duration-200 bg-muted/50 ${
          isActive 
            ? "border-primary" 
            : "border-transparent group-hover:border-primary" 
        }`}
      >
        <Image
          src="/default-avatar.jpg" 
          alt="Profilim"
          fill
          className="object-cover"
          sizes="36px"
        />
      </div>
      
      <div 
        className={`absolute inset-0 rounded-full transition-all duration-200 ${
          isActive 
            ? "ring-2 ring-primary/20" 
            : "group-hover:ring-2 group-hover:ring-primary/20"
        }`}
      ></div>
      
    </Link>
  );
}