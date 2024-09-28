import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'トップページ',
  description: 'トップページ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className='l_top'>{children}</div>;
}
