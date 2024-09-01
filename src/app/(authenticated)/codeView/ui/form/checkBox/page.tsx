import CheckBox from '@/components/Ui/CodeView/Form/CheckBox'
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