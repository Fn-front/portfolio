'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'

type Props = {
  editFilePaths: unknown[]
}

export const CodeViewCardList = (props: Props) => {

  const el = useRef(null)
  
  useEffect(() => {
    console.log(el.current);
  }, [el])

  return (
    <>
      {/* {
        test2.map((item: any, index) => {
          return (
            <div key={index}>
              <Link href={ item }>{ item }</Link>
            </div>
          )
        })
      } */}
      <iframe
        src="/codeView/ui/form/inputText"
        scrolling='yes'
        ref={el}
        loading='lazy'
      />
    </>
  )
}

export default CodeViewCardList