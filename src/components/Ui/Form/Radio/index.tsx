import { forwardRef, ComponentPropsWithoutRef } from 'react';
import { type FieldError } from 'react-hook-form';

type props = {
  label: string;
  error: FieldError | undefined;
  data: Array<string>
};

type Props = ComponentPropsWithoutRef<'input'> & props;

const InputText = forwardRef<HTMLInputElement, Props>(
  ({ label, error, data, ...register }, ref) => {
    return (
      <>
        <p className='c_label'>{label}</p>
        <div className='l_form_list u_mt8'>
          {data.map((item, index) => {
            return (
              <div className='l_form_list_item'>
                <div className='l_form_column_2 l_form_column_align_center'>
                  <div className='l_form_column_item' key={index}>
                    <input
                      type='radio'
                      className='c_radio'
                      value={item}
                      {...register}
                      ref={ref}
                    />
                  </div>
                  <div className='l_form_column_item'>
                    <label htmlFor={item}>
                      {item}
                    </label>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        {error && <p className='c_text_error u_mt8'>{error.message}</p>}
      </>
    );
  },
);

InputText.displayName = 'InputText';

export default InputText;
