import InputText from '@/components/Form/InputText'
import CodeView from '@/components/Layout/CodeView'

export default function Page() {

  const head: string = 'inputテキスト';
  return (
    <>
      <CodeView head={head}>
        <InputText />
      </CodeView>
    </>
  );
}