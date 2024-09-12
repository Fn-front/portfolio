import { FC } from 'react'

type Props = {
  Component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  label: string
}

export const HeadLine: FC<Props> = ({ Component = 'h1', label }) => {
  return <Component className={`c_${Component}`}>{label}</Component>
}

export default HeadLine
