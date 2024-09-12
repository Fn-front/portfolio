import { getFile } from '@/features/ReadFile'
import ComponentWrapper from '@/components/Layout/ComponentWrapper'

const Default = async () => {
  const contentPath = '/src/styles/components/form/inputText/_default.scss'
  const content: string = await getFile(contentPath)

  return (
    <>
      <h3 className='c_h3'>デフォルト</h3>
      <ComponentWrapper styleCode={content}>
        <div className='l_form_column_2'>
          <div className='l_form_column_item'>
            <label htmlFor='input'>入力フォーム</label>
          </div>
          <div className='l_form_column_item'>
            <input type='text' name='input' className='c_input_text' />
          </div>
        </div>
      </ComponentWrapper>
    </>
  )
}

export default Default
