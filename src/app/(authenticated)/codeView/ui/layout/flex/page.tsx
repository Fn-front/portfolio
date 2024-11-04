import Flex from '@/components/CodeView/Layout/Flex';
import CodeView from '@/components/Layout/CodeView';

export default function Page() {
  const head: string = 'Flex';
  return (
    <>
      <CodeView head={head}>
        <Flex />
      </CodeView>
    </>
  );
}
