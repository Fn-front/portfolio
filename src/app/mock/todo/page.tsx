import { getList } from '@/hooks/api/todo/Get'
import { unstable_noStore as noStore } from 'next/cache';

export const dynamic = 'force-dynamic'

export default async function MockTodo() {

  noStore();
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