import StartingStyle from '@/features/CodeView/UseCase/StartingStyle'
import CodeView from '@/components/Layout/CodeView'

export default function Page() {

  const head: string = 'CSS：@starting-style';
  return (
    <>
      <CodeView head={head}>
        <StartingStyle />
      </CodeView>
    </>
  );
}