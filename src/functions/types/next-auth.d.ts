import 'next-auth/jwt';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      role: string;
    } & DefaultSession['user'];
  }
  interface User extends DefaultUser {
    role: string;
  }
}
declare module 'next-auth/jwt' {
  interface JWT {
    role?: string;
  }
}
