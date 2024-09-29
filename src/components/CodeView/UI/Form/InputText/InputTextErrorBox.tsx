import ErrorIcon from '@/components/Icons/Error';
import { getFile } from '@/features/ReadFile';
import ComponentWrapper from '@/components/Layout/ComponentWrapper';

const ErrorBox = async () => {
  const contentPath = './src/styles/components/form/inputText/';
  const contentFile = '_error_box.scss';
  const content: string = await getFile(contentPath, contentFile);

  return (
    <>
      <h3 className='c_h3 u_mt40'>エラーメッセージ：ボックスエリア</h3>
      <ComponentWrapper styleCode={content}>
        <div className='l_form_column_2'>
          <div className='l_form_column_item'>
            <label htmlFor='input' className='c_input_text_item_label'>
              入力フォーム
            </label>
          </div>
          <div className='l_form_column_item'>
            <input type='text' name='input' className='c_input_text' />
            <div className='c_error_box u_mt8'>
              <ErrorIcon color='red' marginTop='3px' />
              <p className='c_text_error'>エラーテキスト</p>
            </div>
          </div>
        </div>
      </ComponentWrapper>
    </>
  );
};

export default ErrorBox;
