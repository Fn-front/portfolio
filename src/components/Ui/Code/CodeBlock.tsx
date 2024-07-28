import Style from '@/components/Ui/Code/StyleCodeBlock'
import Html from '@/components/Ui/Code/HtmlCodeBlock'

export const CodeBlock = ({
  htmlCode,
  styleCode
}: Readonly<{
  htmlCode: string
  styleCode: string
}>
) => {
  return (
    <>
      <div className="p_code_block">
        <div></div>
        <Html element={htmlCode}/>
        <Style content={styleCode} />
      </div>
    </>
  )
}

export default CodeBlock