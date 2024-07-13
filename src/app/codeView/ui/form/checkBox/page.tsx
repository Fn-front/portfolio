import CheckBox from '@/components/Ui/Form/CheckBox'
import CodeView from '@/components/Layout/CodeView'

export default function Page() {

  const head: string = 'チェックボックス';
  return (
    <>
      <CodeView head={head}>
        <CheckBox />
      </CodeView>
    </>
  );
}