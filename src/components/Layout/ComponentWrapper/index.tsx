'use client'

import { useRef, useEffect, useState } from 'react'
import CodeBlock from '@/components/Ui/Code/CodeBlock'
import CodeTwoToneIcon from '@mui/icons-material/CodeTwoTone';
import Icon from '@/components/Ui/Icon'

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
      <div className='l_component_wrapper u_mt16' ref={ref}>
        <div className='c_icon_code'>
          <Icon>
            <CodeTwoToneIcon fontSize='large' />
          </Icon>
        </div>
        {children}
      </div>
      <CodeBlock styleCode={styleCode} htmlCode={element} />
    </>
  )
}

export default ComponentWrapper