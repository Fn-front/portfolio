'use client';

import { useRef, useEffect, useState } from 'react';
import CodeTwoToneIcon from '@mui/icons-material/CodeTwoTone';
import Icon from '@/components/Ui/Icon';
import CodeBlock from '@/components/CodeView/UI/Code/CodeBlock';

export const ComponentWrapper = ({
  children,
  styleCode,
}: Readonly<{
  children: React.ReactNode;
  styleCode?: string;
}>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [element, setElement] = useState<string>('');
  const [codeOpen, setCodeOpen] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (ref.current) return setElement(ref.current.outerHTML);
    })();
  }, []);

  return (
    <>
      {styleCode &&
        <>
          <div className='c_code_copy'>
            <div
              className='c_icon_code'
              onClick={() => setCodeOpen((prev) => !prev)}
            >
              <Icon>
                <CodeTwoToneIcon fontSize='large' />
              </Icon>
            </div>
            <div className='l_component_wrapper u_mt16' ref={ref}>
              {children}
            </div>
          </div>
          <CodeBlock
            styleCode={styleCode}
            htmlCode={element}
            viewStatus={codeOpen}
          />
        </>
      }
      {!styleCode &&
        <div className='l_component_wrapper u_mt16' ref={ref}>
          {children}
        </div>
      }
    </>
  );
};

export default ComponentWrapper;
