import CodeBlock from '@/components/Code'
import { getFile } from '@/features/ReadFile'
import '@/styles/components/form/inputText/input_text.scss'
import '@/styles/components/form/label/input_text.scss'

const Default = async() => {
  
  const contentPath = '/src/styles/components/form/inputText/input_text.scss'
  const content: string = await getFile(contentPath)

  return (
    <>
      <h3 className='c_h3'>デフォルト</h3>
      <div className="l_component_wrapper u_mt16">
        <label htmlFor="input" className='c_label_input_text'>入力フォーム</label>
        <input type="text" name="input" className="c_input_text" />
      </div>
      <CodeBlock content={content} />
    </>
  )
}

export default Default;