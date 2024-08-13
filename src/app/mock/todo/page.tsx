import { useState } from 'react'
import { getList } from '@/hooks/api/todo/Get'
import { unstable_noStore as noStore } from 'next/cache';
import styles from './todo.module.scss'

// localhostのfetchがgithub actionsのbuildだと動かないので記述が必要
export const dynamic = 'force-dynamic'

export default async function MockTodo() {

  // github actions用
  noStore();

  const data = await getList()

  return (
    <ul className={styles.m_todo_list}>
      { data.data.map((todo: any) => (
        <li key={todo.id} className={styles.m_todo_list_item}>
          <span className={styles.m_todo_list_item_num}>{ todo.id }</span>
          <div>
            <span className={styles.m_todo_list_item_date}>Date：{ todo.date }</span>
            <p>タイトル：{ todo.title }</p>
          </div>
        </li>
      )) }
    </ul>
  );
}