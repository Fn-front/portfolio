import parse from 'html-react-parser';
import highlight from "highlight.js";
import "highlight.js/styles/tokyo-night-dark.css";
import scss from "highlight.js/lib/languages/scss";
highlight.registerLanguage("scss", scss);

export const CodeBlock = (props: any) => {

  const highlightedCode: string = highlight.highlight(props.content, {language: 'scss'}).value;

  return (
    <>
      <details>
        <summary>スタイル</summary>
        <div className='c_code_block u_mt8'>
          <pre><code className="scss">{ parse(highlightedCode) }</code></pre>
        </div>
      </details>
    </>
  )
}

export default CodeBlock