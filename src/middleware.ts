import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

// 管理者権限が必要なパス一覧
const adminOnlyPathRegex = [
  new RegExp(`^/user/login/register.*$`),
  new RegExp(`^/xxx/.*$`),
  new RegExp(`^/xxx/.*$`),
  new RegExp(`^/xxx/.*$`),
];

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;

    // 管理者権限のないユーザーが管理者権限が必要なパスにアクセスした場合は404
    if (
      req.nextauth.token?.userRole !== 'admin' &&
      adminOnlyPathRegex.some((regex) => regex.test(pathname))
    ) {
      return NextResponse.rewrite(new URL('/404', req.url));
    }
  },
  {
    // callbacks: {
    //   // 認可に関する処理。ロールが `admin` ならOK
    //   authorized: ({ token }) => {
    //     return token?.role === 'admin';
    //   },
    // },
    // callbacks: {
    //   authorized: ({ token }) => {
    //     if (token) return true;
    //   },
    // },
    // リダイレクトページ
    pages: {
      signIn: '/user/login',
    },
  },
);

export const config = {
  // ルートとregister・api・loginはリダイレクト対象から外す
  // matcher: ['/((?!register|api|login|).*)'],

  // register・api・loginはリダイレクト対象から外す
  matcher: ['/((?!register|api|login).*)'],
};