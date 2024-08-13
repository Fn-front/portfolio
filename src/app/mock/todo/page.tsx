'use client'

import { useState, useEffect } from 'react'
import { getList } from '@/hooks/api/todo/Get'
import { unstable_noStore as noStore } from 'next/cache';
import styles from './todo.module.scss'

// localhostのfetchがgithub actionsのbuildだと動かないので記述が必要
export const dynamic = 'force-dynamic'

export default function MockTodo() {

  // github actions用
  noStore();

  const [dataList, setDataList] = useState<Array<object>>();

  useEffect(() => {

    (async() => {      
      const data = await getList()
      setDataList(data.data)
    })()

  }, [])



  return (
    <ul className={styles.m_todo_list}>
      { dataList && dataList.map((todo: any) => (
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