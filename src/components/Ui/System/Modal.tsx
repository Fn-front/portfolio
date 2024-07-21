import { useLayoutEffect, useState } from 'react'
import parse from 'html-react-parser';
import highlight from 'highlight.js';
import  { format } from 'prettier/standalone'
import * as parserHTML from 'prettier/parser-html';

const SystemModal = (props: any) => {

  const [code, setCode] = useState<string>('')

  useLayoutEffect(() => {
    (async() => {
      if (!props.element) return
      
      const test = await format((props.element), {
        parser: 'html',
        plugins: [parserHTML],
      })    
      
      const highlightedCode: string = highlight.highlight(test, {language: 'html'}).value;
      console.log(test);
      
      setCode(highlightedCode)
    })()
  })
  
  

  return (
    <>
      <pre><code className='html'>{ parse(code) }</code></pre>
    </>
  )
}

export default SystemModal;