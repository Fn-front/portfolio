type Props = {
  message: string
  type: string
}

export const SystemMessage = (props: Props) => {

  return (
    <div className={`c_system_message c_${props.type}_message`}>
      <p>{ props.message }</p>
    </div>
  )
}