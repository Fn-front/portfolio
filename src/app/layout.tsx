import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Sidebar from "@/components/SideBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import '@/styles/app.scss'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:"fukumi",
    template: '%s | fukumi'
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <div className="l_global_container">
          <Sidebar />
          <main className="l_main">
            <div className="l_container">
              {children}
            </div>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
