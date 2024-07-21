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

  const ref = useRef(null)

  const [test, setTest] = useState<HTMLDivElement>();

  useEffect(() => {
    setTest(ref.current.outerHTML)
  }, [ref])

  return (
    <>
      <div className='l_component_wrapper u_mt16' ref={ref}>{children}</div>
      <HtmlCodeBlock element={test}/>
      <StyleCodeBlock content={styleCode} />
    </>
  )
}

export default ComponentWrapper