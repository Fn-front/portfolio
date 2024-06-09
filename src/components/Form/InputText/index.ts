import { getFile } from '@/features/ReadFile'

const InputText = async() => {

  const contentPath = '/src/styles/components/form/inputText/inputText.scss'
  const content: string = await getFile(contentPath)

  return content
}

export default InputText;