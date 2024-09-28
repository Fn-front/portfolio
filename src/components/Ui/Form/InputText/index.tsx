import { Noop, type FieldError } from 'react-hook-form';

type Props = {
  label: string;
  error: FieldError | undefined;
  errorBg?: boolean;
  placeholder: string;
  onBlur: Noop;
  // biome-ignore lint:reason
  onChange: (...event: any[]) => void;
};

export const InputText = (props: Props) => {
  const { label, error, errorBg, placeholder, ...field } = props;
  return (
    <>
      <label htmlFor={label} className='c_label'>
        {label}
      </label>
      <input
        type='text'
        name={label}
        className={`c_input_text u_mt8 ${errorBg ? 'c_input_text_error_bg' : ''}`}
        placeholder={placeholder}
        {...field}
      />
      {error && <p className='c_text_error u_mt8'>{error.message}</p>}
    </>
  );
};

export default InputText;
