export const CodeBlock = ({
  children
}: Readonly<{
  children: React.ReactNode
}>
) => {
  return (
    <>
      <div className="p_code_block">
        {children}
      </div>
    </>
  )
}

export default CodeBlock