import { getFile } from '@/features/ReadFile'
import ComponentWrapper from '@/components/Layout/ComponentWrapper'


const ErrorBg = async() => {
  
  const contentPath = '/src/styles/components/form/inputText/_error_bg.scss'
  const content: string = await getFile(contentPath)

  return (
    <>
      <h3 className='c_h3 u_mt40'>エラーメッセージ：背景色あり</h3>
      <ComponentWrapper styleCode={content}>
        <div className='l_form_column_2'>
          <div className='l_form_column_item'><label htmlFor='input' className='c_input_text_item_label'>入力フォーム</label></div>
          <div className='l_form_column_item'><input type='text' name='input' className='c_input_text c_input_text_error_bg' /><p className='c_text_error u_mt8'>エラーテキスト</p></div>
        </div>
      </ComponentWrapper>
    </>
  )
}

export default ErrorBg;