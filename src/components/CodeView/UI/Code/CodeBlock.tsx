import { useState, useEffect } from 'react';
import Style from './StyleCodeBlock';
import Html from './HtmlCodeBlock';

import SwitchRightIcon from '@mui/icons-material/SwitchRight';
import SwitchLeftIcon from '@mui/icons-material/SwitchLeft';
import Icon from '@/components/Ui/Icon';

type Props = {
  styleCode: string;
  htmlCode: string;
  viewStatus: boolean;
};

export const CodeBlock = (props: Props) => {
  const { styleCode, htmlCode, viewStatus } = props;
  const [viewCodeBlock, setViewCodeBlock] = useState<boolean>(viewStatus);
  const [viewHtml, setViewHtml] = useState<boolean>(true);
  const [viewStyle, setViewStyle] = useState<boolean>(true);

  useEffect(() => {
    setViewCodeBlock(viewStatus);
  }, [viewStatus]);
  return (
    <>
      {viewCodeBlock && (
        <div className='p_code_block u_mt16'>
          <ul className='l_list_icon_switch'>
            <li className='l_list_icon_switch_item'>
              <div
                onClick={() =>
                  viewStyle ? setViewHtml((prev) => !prev) : false
                }
              >
                <Icon>
                  <SwitchRightIcon fontSize='large' />
                </Icon>
              </div>
            </li>
            <li className='l_list_icon_switch_item'>
              <div
                onClick={() =>
                  viewHtml ? setViewStyle((prev) => !prev) : false
                }
              >
                <Icon>
                  <SwitchLeftIcon fontSize='large' />
                </Icon>
              </div>
            </li>
          </ul>
          <div className='p_code_block_list'>
            {viewHtml && <Html element={htmlCode} />}
            {viewStyle && <Style content={styleCode} />}
          </div>
        </div>
      )}
    </>
  );
};

export default CodeBlock;
