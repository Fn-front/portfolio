'use client'

import { useState, useEffect } from 'react'
import { getList } from '@/hooks/api/todo/Get'
import { addData } from '@/hooks/api/todo/Add'
import { addList } from '@/hooks/api/todo/types'
import { unstable_noStore as noStore } from 'next/cache';
import styles from './todo.module.scss'

// localhostのfetchがgithub actionsのbuildだと動かないので記述が必要
export const dynamic = 'force-dynamic'

export default function MockTodo() {

  // github actions用
  noStore();

  const [dataList, setDataList] = useState<Array<addList>>([])
  const [inputValue, setInputValue] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [checkBox, setCheckBox] = useState<Array<number>>([])

  // データ追加のAPIは叩くが、クライアント側ではページ読み込み時の取得データの制御のみ行う
  // データ追加した場合は、リストの再取得を行わない
  const handleAddData = async() => {
    const createData = {
      id: dataList[dataList.length -1].id + 1,
      title: inputValue,
      date: new Date().toISOString(),
      done: false
    }
    setDataList(
      [
        ...dataList, 
        {
          ...createData
        }
      ]
    )

    //DBにデータを追加するAPIを記述
    const res = await addData(createData)

    // メッセージを表示、一定時間出たら消える
    viewMessage(res.message)

    // データ追加が完了したら入力フィールドを空にする
    setInputValue('')
  }

  const handleDeleteData = async() => {
    setDataList(dataList.filter((a) => !checkBox.includes(a.id)))
  }

  // チェックボックスにcheckが入ったIDを配列に格納
  const handleCheckBox = (check: boolean, id: number) => {
    check ? setCheckBox([...checkBox, id]) : setCheckBox(checkBox.filter((a, b) => (a != id)))
  }

  // メッセージ
  const viewMessage = (data: string) => {
    setMessage(data)

    const deleteMessage = setTimeout(() => {
      setMessage('')
      clearTimeout(deleteMessage)
    }, 3000)
  }


  useEffect(() => {    

    (async() => {      
      const data = await getList()
      setDataList(data.data)
    })()
    
  }, [])



  return (
    <>
      <h2 className='c_h2'>todoリスト</h2>
      <div className='u_mt32'>
        <input
          type="text"
          name=""
          id=""
          placeholder='タイトル'
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          className={styles.m_todo_input}
        />
        <button
          type='button'
          className={styles.m_todo_input_button}
          onClick={handleAddData}
        >
          追加
        </button>
        <button
          type='button'
          className={styles.m_todo_input_button}
          onClick={handleDeleteData}
        >
          削除
        </button>
      </div>
      <p className='u_mt16'>{ message }</p>
      <ul className={`${styles.m_todo_list} u_mt16`}>
        { dataList.map((todo: any) => (
          <li key={todo.id} className={styles.m_todo_list_item}>
            <div>
              <input
                type="checkbox"
                className={styles.m_todo_list_item_checkbox}
                onChange={(e) => handleCheckBox(e.target.checked, todo.id)}
              />
            </div>
            <span className={styles.m_todo_list_item_num}>{ todo.id }</span>
            <div>
              <span className={styles.m_todo_list_item_date}>Date：{ todo.date }</span>
              <p>タイトル：{ todo.title }</p>
            </div>
          </li>
        )) }
      </ul>
    </>
  );
}