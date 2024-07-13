import CodeBlock from '@/components/Ui/Code'
import { getFile } from '@/features/ReadFile'

const CheckBoxList = async() => {
  
  const contentPath = '/src/styles/components/form/checkBox/_error.scss'
  const content: string = await getFile(contentPath)

  return (
    <>
      <h3 className='c_h3 u_mt40'>チェックボックスリスト エラー</h3>
      <div className='l_component_wrapper u_mt16'>
        <div className='l_check_box_list'>
          <div className="l_check_box_list_item">
            <div className='l_form_column_2 l_form_column_align_center'>
              <div className='l_form_column_item'><input type="checkbox" className='c_check_box' name="" id="checkbox8" checked /></div>
              <div className='l_form_column_item'><label htmlFor='checkbox8' className='c_input_text_item_label'>入力フォーム</label></div>
            </div>
          </div>
          <div className="l_check_box_list_item">
            <div className='l_form_column_2 l_form_column_align_center'>
              <div className='l_form_column_item'><input type="checkbox" className='c_check_box' name="" id="checkbox9" /></div>
              <div className='l_form_column_item'><label htmlFor='checkbox9' className='c_input_text_item_label'>入力フォーム</label></div>
            </div>
          </div>
          <div className="l_check_box_list_item">
            <div className='l_form_column_2 l_form_column_align_center'>
              <div className='l_form_column_item'><input type="checkbox" className='c_check_box' name="" id="checkbox10" /></div>
              <div className='l_form_column_item'><label htmlFor='checkbox10' className='c_input_text_item_label'>入力フォーム</label></div>
            </div>
          </div>
          <div className="l_check_box_list_item">
            <div className='l_form_column_2 l_form_column_align_center'>
              <div className='l_form_column_item'><input type="checkbox" className='c_check_box' name="" id="checkbox11" /></div>
              <div className='l_form_column_item'><label htmlFor='checkbox11' className='c_input_text_item_label'>入力フォーム</label></div>
            </div>
          </div>
          <div className="l_check_box_list_item">
            <div className='l_form_column_2 l_form_column_align_center'>
              <div className='l_form_column_item'><input type="checkbox" className='c_check_box' name="" id="checkbox12" /></div>
              <div className='l_form_column_item'><label htmlFor='checkbox12' className='c_input_text_item_label'>入力フォーム</label></div>
            </div>
          </div>
          <div className="l_check_box_list_item">
            <div className='l_form_column_2 l_form_column_align_center'>
              <div className='l_form_column_item'><input type="checkbox" className='c_check_box' name="" id="checkbox13" /></div>
              <div className='l_form_column_item'><label htmlFor='checkbox13' className='c_input_text_item_label'>入力フォーム</label></div>
            </div>
          </div>
        </div>
        <p className='c_text_error u_mt8'>エラーテキスト</p>
      </div>
      <CodeBlock content={content} />
    </>
  )
}

export default CheckBoxList;