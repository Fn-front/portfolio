'use client'

import { useContext } from 'react'
import { SystemMessageContext } from '@/hooks/System/Context/SystemMessage';
import parse from 'html-react-parser';
import Icon from '@/components/Ui/Icon'
import highlight from 'highlight.js';
import 'highlight.js/styles/tokyo-night-dark.css';
import scss from 'highlight.js/lib/languages/scss';
import ContentCopyIcon from '../../Icons/Copy';
import { handleCopyToClipboard } from '@/utils/CopyToClipboard';
highlight.registerLanguage('scss', scss);

export const StyleCodeBlock = (props: any) => {

  const { setMessage, setType, setVisible } = useContext(SystemMessageContext)
  const highlightedCode: string = highlight.highlight(props.content, {language: 'scss'}).value;

  const handleCopyCodeBlock = (e: any) => {
    const copyResult = handleCopyToClipboard(e.parentNode.querySelector('.scss'))

    // システムメッセージ格納
    setType('success')
    setMessage('done copy！')
    setVisible(copyResult)

    // システムメッセージ非表示
    setTimeout(() => setVisible(false), 5000)
  }


  return (
    <>
      <div
        className='c_code_block'
        // onMouseLeave={(e) => handleFocusCodeBlock(e)}
      >
        <pre><code className='scss'>{ parse(highlightedCode) }</code></pre>
        <div 
          className='c_icon_copy'
          onClick={(e) => handleCopyCodeBlock(e.target)}
        >
          <Icon>
            <ContentCopyIcon
              color=''
              marginTop=''
              size='2rem'
            />
          </Icon>
        </div>
      </div>
    </>
  )
}

export default StyleCodeBlock