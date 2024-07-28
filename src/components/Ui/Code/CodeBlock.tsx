import { useState } from 'react'
import Style from '@/components/Ui/Code/StyleCodeBlock'
import Html from '@/components/Ui/Code/HtmlCodeBlock'

import SwitchRightIcon from '@mui/icons-material/SwitchRight';
import SwitchLeftIcon from '@mui/icons-material/SwitchLeft';
import Icon from '@/components/Ui/Icon'

export const CodeBlock = ({
  htmlCode,
  styleCode
}: Readonly<{
  htmlCode: string
  styleCode: string
}>
) => {

  const [viewCodeBlock, setViewCodeBlock] = useState<boolean>(false)
  const [viewHtml, setViewHtml] = useState<boolean>(true)
  const [viewStyle, setViewStyle] = useState<boolean>(true)

  return (
    <>
      { viewCodeBlock && (

        <div className="p_code_block">
          <ul className='l_list_icon_switch'>
            <li className='l_list_icon_switch_item'>
              <div
                onClick={() => viewStyle ? setViewHtml((prev) => !prev) : false}
              >
                <Icon>
                  <SwitchRightIcon fontSize='large' />
                </Icon>
              </div>
            </li>
            <li className='l_list_icon_switch_item'>
              <div
                onClick={() => viewHtml ? setViewStyle((prev) => !prev) : false}
              >
                <Icon>
                  <SwitchLeftIcon fontSize='large' />
                </Icon>
              </div>
            </li>
          </ul>
          <div className='p_code_block_list'>
            { viewHtml && <Html element={htmlCode}/>}
            { viewStyle && <Style content={styleCode} />}
          </div>
        </div>
        
      ) }
    </>
  )
}

export default CodeBlock