import 'next-auth/jwt';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      role: 'admin' | 'user' | 'mock' | 'codeView';
    } & DefaultSession['user'];
  }
}
declare module 'next-auth/jwt' {
  interface JWT {
    role?: 'admin' | 'user' | 'mock' | 'codeView';
  }
}
