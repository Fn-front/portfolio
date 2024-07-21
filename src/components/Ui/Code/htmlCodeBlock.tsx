import { useState } from 'react'
import parse from 'html-react-parser';
import highlight from 'highlight.js';
import  { format } from 'prettier/standalone'
import * as parserHTML from 'prettier/parser-html';


export const HtmlCodeBlock = (props: any) => {

  const [code, setCode] = useState<string>('');
  const [viewStatus, setViewStatus] = useState<boolean>(true);

  (async() => {
    if (!props.element) return
    
    const test = await format((props.element), {
      parser: 'html',
      plugins: [parserHTML],
    })    
    
    const highlightedCode: string = highlight.highlight(test, {language: 'html'}).value;      
    setCode(highlightedCode)
  })()

  return (
    <>
      { viewStatus && <pre><code className='html'>{ parse(code) }</code></pre>}
    </>
  )
}

export default HtmlCodeBlock