import React from 'react';
import BreadcrumbsList from '@/features/BreadcrumbsList';
import Sidebar from '@/components/Ui/SideBar';
import Header from '@/features/Ui/Header';
import Footer from '@/components/Ui/Footer';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <Header />
      <div className='l_global_container'>
        <Sidebar />
        <main className='l_main'>
          <div className='l_container'>
            <BreadcrumbsList />
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
