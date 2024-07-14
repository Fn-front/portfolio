'use client'

import { useRef, useEffect, RefObject, createRef } from 'react'
import Link from 'next/link'

type Props = {
  editFilePaths: unknown[]
}

export const CodeViewCardList = (props: Props) => {

  const { editFilePaths } = props
  // 複数のrefを指定するためRefObjectを定義
  const el = useRef<RefObject<HTMLIFrameElement>[]>([])
  
  editFilePaths.forEach((_, i) => {
    el.current[i] = createRef<HTMLIFrameElement>();
  });
  
  useEffect(() => {
    console.log(el.current);
  }, [])

  return (
    <>
      <ul className='c_card_list'>
        {
          editFilePaths.map((item: any, index) => {
            return (
              <li
                key={index}
                className='c_card_list_item'
              >
                <Link href={ item }>
                  <iframe
                    src={ item }
                    scrolling='yes'
                    ref={el.current[index]}
                    loading='lazy'
                  />
                </Link>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default CodeViewCardList