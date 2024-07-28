'use client'

import { useRef, useEffect, useState } from 'react'
import StyleCodeBlock from '@/components/Ui/Code/StyleCodeBlock'
import HtmlCodeBlock from '@/components/Ui/Code/HtmlCodeBlock'
import CodeBlock from '@/components/Ui/Code/CodeBlock'

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
      <CodeBlock>
        <HtmlCodeBlock element={element}/>
        <StyleCodeBlock content={styleCode} />
      </CodeBlock>
    </>
  )
}

export default ComponentWrapper