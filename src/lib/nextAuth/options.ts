import { PrismaAdapter } from '@next-auth/prisma-adapter';
import bcrypt from 'bcrypt';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
// googleとgithubでのログイン実装時に活性化
// import GitHubProvider from 'next-auth/providers/github'
// import GoogleProvider from 'next-auth/providers/google'

import prisma from '@/lib/prisma/Prisma';

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Eメール',
          type: 'text',
        },
        password: {
          label: 'パスワード',
          type: 'password',
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error('Email and password required');
        }

        // emailを使用しユーザーを取得
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        // ユーザーかパスワードがない場合にエラーを返す
        if (!user || !user.password) {
          throw new Error('Eメールが一致しません');
        }

        // パスワードのハッシュをデコードし確認
        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        // パスワードが一致しない場合はエラーを返す
        if (!isCorrectPassword) {
          throw new Error('パスワードが一致しません');
        }

        return user;
      },
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.user = user;
        // biome-ignore lint:
        const u = user as any;
        token.role = u.role;
      }
      if (account) {
        token.accessToken = account.access_token;
      }

      return token;
    },
    session: ({ session, token }) => {
      token.accessToken;
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role,
        },
      };
    },
  },
};

export default options;
