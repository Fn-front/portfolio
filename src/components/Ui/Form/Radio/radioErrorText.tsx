import CodeBlock from '@/components/Ui/Code'
import { getFile } from '@/features/ReadFile'
import ComponentWrapper from '@/components/Layout/ComponentWrapper'

const Default = async() => {
  
  const contentPath = '/src/styles/components/form/radio/_error.scss'
  const content: string = await getFile(contentPath)

  return (
    <>
      <h3 className='c_h3 u_mt40'>エラーメッセージ</h3>
      <ComponentWrapper styleCode={content}>
        <div className="l_form_list">
          <div className="l_form_list_item">
            <div className='l_form_column_2 l_form_column_align_center'>
              <div className='l_form_column_item'>
                <input type='radio' name='radio1' id='radio3' className='c_radio' defaultChecked={true} />
              </div>
              <div className='l_form_column_item'>
                <label htmlFor='radio3' className='c_radio_label'>inputテキスト</label>
              </div>
            </div>
          </div>
          <div className="l_form_list_item">
            <div className='l_form_column_2 l_form_column_align_center'>
              <div className='l_form_column_item'>
                <input type='radio' name='radio1' id='radio4' className='c_radio' />
              </div>
              <div className='l_form_column_item'>
                <label htmlFor='radio4' className='c_radio_label'>inputテキスト</label>
              </div>
            </div>
          </div>
        </div>
        <p className='c_text_error u_mt8'>エラーテキスト</p>
      </ComponentWrapper>
    </>
  )
}

export default Default;