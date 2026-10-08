'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={`relative px-1 py-1 transition-colors ${
        isActive 
          ? "text-primary font-medium" 
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-primary rounded-full" />
      )}
    </Link>
  );
}