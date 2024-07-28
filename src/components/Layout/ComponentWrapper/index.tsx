'use client'

import { useRef, useEffect, useState } from 'react'
import StyleCodeBlock from '@/components/Ui/Code/styleCodeBlock'
import HtmlCodeBlock from '@/components/Ui/Code/htmlCodeBlock'

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
    if (ref.current) return setElement(ref.current.outerHTML)
  }, [ref])

  return (
    <>
      <div className='l_component_wrapper u_mt16' ref={ref}>{children}</div>
      <HtmlCodeBlock element={element}/>
      <StyleCodeBlock content={styleCode} />
    </>
  )
}

export default ComponentWrapper