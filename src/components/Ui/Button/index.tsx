type Color = 'blue' | 'green'

type Type = 'button' | 'submit'

type Props = {
  type?: Type
  label: string
  color?: Color
}

export const Button = (props: Props) => {

  const { type, label, color } = props

  return (
    <>
      <button
        type={ type ?? 'button' }
        className={`c_button c_button_${ color ? color : 'normal' }`}
      >
        { label }
      </button>
    </>
  )
}

export default Button