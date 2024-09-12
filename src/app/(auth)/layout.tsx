export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <main className='l_main'>
        <div className='l_container'>{children}</div>
      </main>
    </>
  )
}
