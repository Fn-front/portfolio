import CodeBlock from '@/components/Ui/Code'
import { getFile } from '@/features/ReadFile'

const Default = async() => {
  
  const contentPath = '/src/styles/components/form/radio/_error.scss'
  const content: string = await getFile(contentPath)

  return (
    <>
      <h3 className='c_h3 u_mt40'>エラーメッセージ</h3>
      <div className='l_component_wrapper u_mt16'>
        <div className="l_form_list">
          <div className="l_form_list_item">
            <div className='l_form_column_2 l_form_column_align_center'>
              <div className='l_form_column_item'>
                <input type='radio' name='radio' id='radio3' className='c_radio' defaultChecked={true} />
              </div>
              <div className='l_form_column_item'>
                <label htmlFor='radio3' className='c_radio_label'>inputテキスト</label>
              </div>
            </div>
          </div>
          <div className="l_form_list_item">
            <div className='l_form_column_2 l_form_column_align_center'>
              <div className='l_form_column_item'>
                <input type='radio' name='radio' id='radio4' className='c_radio' />
              </div>
              <div className='l_form_column_item'>
                <label htmlFor='radio4' className='c_radio_label'>inputテキスト</label>
              </div>
            </div>
          </div>
        </div>
        <p className='c_text_error u_mt8'>エラーテキスト</p>
      </div>
      <CodeBlock content={content} />
    </>
  )
}

export default Default;