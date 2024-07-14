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
  
  // ref初期設定
  editFilePaths.forEach((_, i) => {
    el.current[i] = createRef<HTMLIFrameElement>();
  });
  
  useEffect(() => {

    el.current.forEach((item) => {
      const iframe = item.current
      const iframeWindow = iframe!.contentWindow;
      iframeWindow!.scrollTo({
        top: 80,
      });
    })

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
                <div className='c_card_list_item_main'>
                  <iframe
                    src={`${item}?iframe=1`}
                    className='c_iframe'
                    scrolling='no'
                    ref={el.current[index]}
                    loading='lazy'
                  />
                </div>
                <div className='c_card_list_item_other u_mt16'>
                  <p><Link href={ item }>{ item }</Link></p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default CodeViewCardList