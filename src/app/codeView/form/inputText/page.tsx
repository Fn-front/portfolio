import InputText from '@/components/Form/InputText'
import CodeView from '@/components/Layout/CodeView'

export const inputText = async() => {

  const head: string = 'inputテキスト';
  return (
    <>
      <CodeView head={head}>
        <InputText />
      </CodeView>
    </>
  );
}


export default inputText;