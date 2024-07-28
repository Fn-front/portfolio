'use client'

import { useRef, useEffect, useState } from 'react'
import Style from '@/components/Ui/Code/StyleCodeBlock'
import Html from '@/components/Ui/Code/HtmlCodeBlock'
import Code from '@/components/Ui/Code/CodeBlock'

export const ComponentWrapper = ({
  children,
  styleCode
}: Readonly<{
  children: React.ReactNode;
  styleCode: string
}>) => {

  const ref = useRef<HTMLDivElement>(null)

  const [element, setElement] = useState<string>('');

  useEffect(() => {
    (async() => {
      if (!!ref.current) return setElement(ref.current.outerHTML)
    })()  
  }, [])

  return (
    <>
      <div className='l_component_wrapper u_mt16' ref={ref}>{children}</div>
      <Code>
        <Html element={element}/>
        <Style content={styleCode} />
      </Code>
    </>
  )
}

export default ComponentWrapper