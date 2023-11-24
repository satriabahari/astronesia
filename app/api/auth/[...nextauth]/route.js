import NextAuth from "next-auth";
import githubAuth from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOption = {
  session: {
    strategy: "jwt",
  },
  providers: [
    // githubAuth({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    CredentialsProvider({
      type: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "satria",
        },
        email: {
          label: "Email",
          type: "email",
          placeholder: "satria@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "*****",
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password || !credentials.username) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }

        return {
          id: user.id,
          username: user.username,
        };
      },
    }),
  ],
  // callbacks: {
  //   jwt({ token, user }) {
  //     if (!user) {
  //       return token;
  //     }

  //     return {
  //       ...token,
  //       id: user.id,
  //     };
  //   },
  //   session({ session, token }) {
  //     return {
  //       ...session,
  //       id: token.id,
  //     };
  //   },
  // },
  pages: {
    signIn: "/auth/login",
  },
  // secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
