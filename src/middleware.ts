// *****************************
// Bu dosyaya dokunmayın
// *****************************
import { auth } from "@/auth"; 

export default auth((req) => {
  const isLoggedIn = !!req.auth; 
  const { pathname } = req.nextUrl;

 
  const isProtectedRoute = pathname.startsWith("/user");
  
  const isAuthRoute = pathname.startsWith("/login");

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL("/user", req.nextUrl));
    }
    return;
  }

  if (isProtectedRoute) {
    if (!isLoggedIn) {
      return Response.redirect(new URL("/login", req.nextUrl));
    }
    return;
  }
});

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};