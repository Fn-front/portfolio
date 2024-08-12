import { getList } from '@/hooks/api/todo/Get'

export default async function MockTodo() {

  const data = await getList()

  return (
    <ul>
      { data.data.map((todo: any) => (
        <li key={todo.id}>
          <p>{ todo.id }</p>
          <p>タイトル：{ todo.title }</p>
          <span>日付：{ todo.date }</span>
        </li>
      )) }
    </ul>
  );
}