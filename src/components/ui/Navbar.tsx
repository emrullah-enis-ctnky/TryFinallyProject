import Link from "next/link";
import { auth } from "@/auth";
import { NavLink } from "./NavLink";
import { ProfileLink } from "./ProfileLink"; 

export async function Navbar() {
  const session = await auth();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
      {/* logo */}
      <Link href="/" className="font-extrabold text-base tracking-tight text-foreground hover:opacity-90 transition-opacity">
        Try<span className="text-primary">Finally</span>
      </Link>

      {/* linkler */}
      <nav className="flex items-center gap-6 text-sm font-medium">

        {session?.user && (
          <NavLink href="/user">
            Panelim
          </NavLink>
        )}
        
        <NavLink href="/problems">
          Problemler
        </NavLink>
        
        <NavLink href="/forum">
          Forum
        </NavLink>

        {session?.user ? (
          <ProfileLink />
        ) : (
          <div className="flex items-center gap-4 ml-2 pl-4 border-l border-border/60">
            <Link href="/login" className="text-muted-foreground hover:text-foreground transition-colors">
              Giriş Yap
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
