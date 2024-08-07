'use client'

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
    
    const { element } = props;

    // 最初のdiv<div class="l_component_wrapper u_mt16">を削除
    const firstDivDelete = element.replace(/^<.+?>/, '')
    // 末尾の</div>を削除
    const lastDivDelete = firstDivDelete.replace(/<\/div>$/, '')    

    const test = await format((lastDivDelete), {
      parser: 'html',
      plugins: [parserHTML],
    })    
    
    const highlightedCode: string = highlight.highlight(test, {language: 'html'}).value;      
    setCode(highlightedCode)
  })()

  return (
    <>
      <div className='c_code_block'>
        { viewStatus && <pre><code className='html'>{ parse(code) }</code></pre> }
      </div>
    </>
  )
}

export default HtmlCodeBlock