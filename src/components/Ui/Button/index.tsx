type Color = 'blue' | 'green'

type Type = 'button' | 'submit'

type Size = 'small' | 'medium' | 'large'

type Props = {
  type?: Type
  label: string
  color?: Color
  size?: Size
}

export const Button = (props: Props) => {

  const { type, label, color, size } = props

  return (
    <>
      <button
        type={ type ?? 'button' }
        className={`c_button c_button_${ color ? color : 'normal'} c_button_${ size ? size : 'medium'}`}
      >
        { label }
      </button>
    </>
  )
}

export default Button