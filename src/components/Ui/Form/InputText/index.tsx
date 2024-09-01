import { forwardRef, ComponentPropsWithoutRef } from 'react'

type label = {
  label: string
}

type Props = ComponentPropsWithoutRef<'input'> & label;

const InputText = forwardRef<HTMLInputElement, Props>(
  ({label, ...register}, ref) => {

  return (
    <>
      <label htmlFor={label} className='c_label'>{ label }</label>
      <input
        type="text"
        className="c_input_text u_mt8"
        { ...register }
        ref={ref}
      />
    </>
  );
});

InputText.displayName = "InputText"

export default InputText