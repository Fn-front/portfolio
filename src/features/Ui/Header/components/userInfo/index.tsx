type Props = {
  info: {
    name: string
    email: string
    image: string
    role: string
  }
}

export const UiHeaderLogout = (props: Props) => {
  const { info } = props
  return (
    <>
      <p>ログアウト</p>
    </>
  )
}

export default UiHeaderLogout