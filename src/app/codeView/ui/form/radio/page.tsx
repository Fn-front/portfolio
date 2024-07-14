import Radio from '@/components/Ui/Form/Radio'
import CodeView from '@/components/Layout/CodeView'

export default function Page() {

  const head: string = 'radio';
  return (
    <>
      <CodeView head={head}>
        <Radio />
      </CodeView>
    </>
  );
}