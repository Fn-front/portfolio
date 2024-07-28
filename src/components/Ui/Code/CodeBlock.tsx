export const CodeBlock = ({
  children
}: Readonly<{
  children: React.ReactNode
}>
) => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        {children}
      </div>
    </>
  )
}

export default CodeBlock