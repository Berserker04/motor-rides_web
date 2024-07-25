import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const NEXTAUTH_SECRET = process.env.NEXT_PUBLIC_NEXTAUTH_SECRET;
const NEXTAUTH_URL = process.env.NEXT_PUBLIC_NEXTAUTH_URL;

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "example@..." },
        password: {
          label: "Contraseña",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials, req) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL_API}/auth/login`,
          {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          }
        );
        const { data } = await res.json();
        if (res.ok && data) {
          data.user.token = data.token;
          return data.user;
        }
        return null;
      },
    }),
  ],
  secret: NEXTAUTH_SECRET,
  cookies: {
    callbackUrl: {
      name: NEXTAUTH_URL || "",
      options: {},
    },
  },
  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
  },
  session: {
    maxAge: 2592000,
    updateAge: 86400,
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    },
  },
});
