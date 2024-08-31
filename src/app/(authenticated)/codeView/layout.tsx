'use client'

import React, { useState } from 'react';
import { SystemMessage } from '@/components/Ui/System/Message';
import { SystemMessageContext } from '@/functions/hooks/system/context/systemMessage';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [systemMessage, setMessage] = useState<string>('')
  const [systemType, setType] = useState<string>('')
  const [systemVisible, setVisible] = useState<boolean>(false)

  return (
    <>
      <SystemMessageContext.Provider value={{ setMessage, setType, setVisible }}>
        { children }

        {/* システムメッセージ */}
        { 
          systemVisible && 
          <SystemMessage
            visible={systemVisible}
            message={systemMessage}
            type={systemType}
          />
        }
      </SystemMessageContext.Provider>
    </>
  );
}