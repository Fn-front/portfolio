export const LayoutCodeView = ({
  children,
  head
}: Readonly<{
  children: React.ReactNode;
  head: string
}>) => {
  return (
    <>
      <h2 className='c_h2'>{ head }</h2>
      <div className='l_code_views u_mt32'>{children}</div>
    </>
  )
}

export default LayoutCodeView