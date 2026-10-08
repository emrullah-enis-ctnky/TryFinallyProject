import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    // Test girişi
    Credentials({
      name: "Test Account",
      credentials: {}, 
      async authorize() {
        
        return {
          id: "test-123",
          name: "Ahmet Yılmaz",
          email: "test@tryfinally.com",
          image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Test", 
        };
      },
    }),
  ],
  pages: {
    signIn: "/login", 
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isUserRoute = nextUrl.pathname.startsWith('/user');
      
      if (isUserRoute) {
        if (isLoggedIn) return true;
        return false; 
      }
      return true;
    },
  },
});