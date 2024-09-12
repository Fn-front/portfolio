import CardList from '@/components/CodeView/Layout/CardList'
import CodeView from '@/components/Layout/CodeView'

export default function Page() {
  const head: string = 'カード'
  return (
    <>
      <CodeView head={head}>
        <CardList />
      </CodeView>
    </>
  )
}
