import CodeBlock from '@/components/Ui/Code'
import ErrorIcon from '@/components/Icons/Error'
import { getFile } from '@/features/ReadFile'

const ErrorBox = async() => {
  
  const contentPath = '/src/styles/components/form/inputText/_error_box.scss'
  const content: string = await getFile(contentPath)

  return (
    <>
      <h3 className='c_h3 u_mt40'>エラーメッセージ：ボックスエリア</h3>
      <div className='l_component_wrapper u_mt16'>
        <div className='c_input_text'>
          <div className='c_input_text_item'><label htmlFor='input' className='c_input_text_item_label'>入力フォーム</label></div>
          <div className='c_input_text_item'>
            <input type='text' name='input' className='c_input_text_item_form' />
            <div className='c_error_box u_mt8'>
              <ErrorIcon 
                color='red'
                marginTop='3px'
              />
              <p className='c_text_error'>エラーテキスト</p>
            </div>
          </div>
        </div>
        
      </div>
      <CodeBlock content={content} />
    </>
  )
}

export default ErrorBox;