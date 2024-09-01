import { forwardRef, ComponentPropsWithoutRef } from 'react'
import { errorMessageInputText } from '@/functions/constants/schema'

type props = {
  label: string
  error: any | undefined
}

type Props = ComponentPropsWithoutRef<'input'> & props;

const InputText = forwardRef<HTMLInputElement, Props>(
  ({label, error, ...register}, ref) => {  
  
  return (
    <>
      <label htmlFor={label} className='c_label'>{ label }</label>
      <input
        type="text"
        className="c_input_text u_mt8"
        { ...register }
        ref={ref}
      />
      { error && 
        <p className='c_text_error u_mt8'>{ label + errorMessageInputText }</p>
      }
    </>
  );
});

InputText.displayName = "InputText"

export default InputText