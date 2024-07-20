import CodeBlock from '@/components/Ui/Code'
import { getFile } from '@/features/ReadFile'

const Default = async() => {
  
  const contentPath = '/src/styles/components/form/radio/_default.scss'
  const content: string = await getFile(contentPath)

  return (
    <>
      <h3 className='c_h3'>デフォルト</h3>
      <div className='l_component_wrapper u_mt16'>
        <div className="l_form_list">
          <div className="l_form_list_item">
            <div className='l_form_column_2 l_form_column_align_center'>
              <div className='l_form_column_item'>
                <input type='radio' name='radio' id='radio1' className='c_radio' defaultChecked={true} />
              </div>
              <div className='l_form_column_item'>
                <label htmlFor='radio1' className='c_radio_label'>inputテキスト</label>
              </div>
            </div>
          </div>
          <div className="l_form_list_item">
            <div className='l_form_column_2 l_form_column_align_center'>
              <div className='l_form_column_item'>
                <input type='radio' name='radio' id='radio2' className='c_radio' />
              </div>
              <div className='l_form_column_item'>
                <label htmlFor='radio2' className='c_radio_label'>inputテキスト</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CodeBlock content={content} />
    </>
  )
}

export default Default;