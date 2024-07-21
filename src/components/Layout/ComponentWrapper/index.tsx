'use client'

import { useRef, useEffect, useState } from 'react'
import Modal from '@/components/Ui/System/Modal'

export const ComponentWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;}>) => {

  const ref = useRef(null)

  const [test, setTest] = useState<HTMLDivElement>();

  useEffect(() => {
    setTest(ref.current.outerHTML)
  }, [ref])

  return (
    <>
      <div className='l_component_wrapper u_mt16' ref={ref}>{children}</div>
      <Modal element={test}/>
    </>
  )
}

export default ComponentWrapper