import InputText from '@/components/Form/InputText'
import CodeBlock from '@/components/Code'

export const inputText = async() => {

  const content = await InputText()

  return (
    <CodeBlock content={content} />
  );
}

export default inputText;