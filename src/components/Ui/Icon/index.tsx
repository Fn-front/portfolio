const Icon = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>
) => {

  return (
    <div className="c_icon">
      {children}
    </div>
  )
}

export default Icon