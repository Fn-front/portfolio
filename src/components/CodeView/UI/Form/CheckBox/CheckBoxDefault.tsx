import { getFile } from '@/features/ReadFile';
import ComponentWrapper from '@/components/Layout/ComponentWrapper';

const Default = async () => {
  const contentPath = '/src/styles/components/form/checkBox/_default.scss';
  const content: string = await getFile(contentPath);

  return (
    <>
      <h3 className='c_h3'>デフォルト</h3>
      <ComponentWrapper styleCode={content}>
        <div className='l_form_column_2 l_form_column_align_center'>
          <div className='l_form_column_item'>
            <input
              type='checkbox'
              className='c_check_box'
              name=''
              id='checkbox'
            />
          </div>
          <div className='l_form_column_item'>
            <label htmlFor='checkbox' className='c_input_text_item_label'>
              入力フォーム
            </label>
          </div>
        </div>
      </ComponentWrapper>
    </>
  );
};

export default Default;
