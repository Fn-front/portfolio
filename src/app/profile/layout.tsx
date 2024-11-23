export default function ProfileLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='l_global_container l_global_container_no_header'>
      <main className='l_main l_main_no_sidebar'>
        <div className='l_container'>
          {children}
        </div>
      </main>
    </div>
  )
}