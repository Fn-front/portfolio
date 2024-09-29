import { getFile } from '@/features/ReadFile';
import ComponentWrapper from '@/components/Layout/ComponentWrapper';

const CheckBoxList = async () => {
  const contentPath = '/src/styles/layout/form/_form_list.scss';
  const content: string = await getFile(contentPath);

  return (
    <>
      <h3 className='c_h3 u_mt40'>チェックボックスリスト</h3>
      <ComponentWrapper styleCode={content}>
        <div className='l_form_list'>
          <div className='l_form_list_item'>
            <div className='l_form_column_2 l_form_column_align_center'>
              <div className='l_form_column_item'>
                <input
                  type='checkbox'
                  className='c_check_box'
                  name=''
                  id='checkbox2'
                />
              </div>
              <div className='l_form_column_item'>
                <label htmlFor='checkbox2' className='c_input_text_item_label'>
                  入力フォーム
                </label>
              </div>
            </div>
          </div>
          <div className='l_form_list_item'>
            <div className='l_form_column_2 l_form_column_align_center'>
              <div className='l_form_column_item'>
                <input
                  type='checkbox'
                  className='c_check_box'
                  name=''
                  id='checkbox3'
                />
              </div>
              <div className='l_form_column_item'>
                <label htmlFor='checkbox3' className='c_input_text_item_label'>
                  入力フォーム
                </label>
              </div>
            </div>
          </div>
          <div className='l_form_list_item'>
            <div className='l_form_column_2 l_form_column_align_center'>
              <div className='l_form_column_item'>
                <input
                  type='checkbox'
                  className='c_check_box'
                  name=''
                  id='checkbox4'
                />
              </div>
              <div className='l_form_column_item'>
                <label htmlFor='checkbox4' className='c_input_text_item_label'>
                  入力フォーム
                </label>
              </div>
            </div>
          </div>
          <div className='l_form_list_item'>
            <div className='l_form_column_2 l_form_column_align_center'>
              <div className='l_form_column_item'>
                <input
                  type='checkbox'
                  className='c_check_box'
                  name=''
                  id='checkbox5'
                />
              </div>
              <div className='l_form_column_item'>
                <label htmlFor='checkbox5' className='c_input_text_item_label'>
                  入力フォーム
                </label>
              </div>
            </div>
          </div>
          <div className='l_form_list_item'>
            <div className='l_form_column_2 l_form_column_align_center'>
              <div className='l_form_column_item'>
                <input
                  type='checkbox'
                  className='c_check_box'
                  name=''
                  id='checkbox6'
                />
              </div>
              <div className='l_form_column_item'>
                <label htmlFor='checkbox6' className='c_input_text_item_label'>
                  入力フォーム
                </label>
              </div>
            </div>
          </div>
          <div className='l_form_list_item'>
            <div className='l_form_column_2 l_form_column_align_center'>
              <div className='l_form_column_item'>
                <input
                  type='checkbox'
                  className='c_check_box'
                  name=''
                  id='checkbox7'
                />
              </div>
              <div className='l_form_column_item'>
                <label htmlFor='checkbox7' className='c_input_text_item_label'>
                  入力フォーム
                </label>
              </div>
            </div>
          </div>
        </div>
      </ComponentWrapper>
    </>
  );
};

export default CheckBoxList;
