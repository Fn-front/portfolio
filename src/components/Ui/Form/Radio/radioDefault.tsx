import CodeBlock from '@/components/Ui/Code'
import { getFile } from '@/features/ReadFile'

const Default = async() => {
  
  const contentPath = '/src/styles/components/form/radio/_default.scss'
  const content: string = await getFile(contentPath)

  return (
    <>
      <h3 className='c_h3'>デフォルト</h3>
      <div className='l_component_wrapper u_mt16'>
        <div className='l_form_column_2'>
          <div className='l_form_column_item'>
            <div className="c_radio_wrapper">
              <input type='radio' name='radio' id='radio1' className='c_radio' defaultChecked={true} />
              <label htmlFor='radio1' className='c_radio_label'>inputテキスト</label>
            </div>
          </div>
          <div className='l_form_column_item'>
            <div className="c_radio_wrapper">
              <input type='radio' name='radio' id='radio2' className='c_radio' />
              <label htmlFor='radio2' className='c_radio_label'>inputテキスト</label>
            </div>
          </div>
        </div>
      </div>
      <CodeBlock content={content} />
    </>
  )
}

export default Default;