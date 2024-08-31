export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <div className='l_global_container'>
        <main className='l_main'>
          <div className='l_container'>
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
