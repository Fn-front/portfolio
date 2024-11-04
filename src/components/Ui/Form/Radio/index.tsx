import { Noop, type FieldError } from 'react-hook-form';

type props = {
  label: string;
  error: FieldError | undefined;
  data: Array<string>;
  onBlur: Noop;
  /* eslint-disable */ lint: reason
  onChange: (...event: any[]) => void;
  value: string;
};

export const InputText = (props: props) => {
  const { label, error, data, value, ...field } = props;
  return (
    <>
      <p className='c_label'>{label}</p>
      <div className='l_form_list u_mt8'>
        {data.map((item, index) => {
          return (
            <div className='l_form_list_item' key={index}>
              <div className='l_form_column_2 l_form_column_align_center'>
                <div className='l_form_column_item'>
                  <input
                    type='radio'
                    name={label}
                    className='c_radio c_radio_white'
                    value={item}
                    id={item}
                    defaultChecked={item === value}
                    {...field}
                  />
                </div>
                <div className='l_form_column_item'>
                  <label htmlFor={item}>{item}</label>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {error && <p className='c_text_error u_mt8'>{error.message}</p>}
    </>
  );
};

export default InputText;
