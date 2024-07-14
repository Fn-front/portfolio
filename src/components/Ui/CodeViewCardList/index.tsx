import {} from 'react'
import Link from 'next/link'

type Props = {
  editFilePaths: unknown[]
}

export const CodeViewCardList = (props: Props) => {

  const { editFilePaths } = props

  return (
    <>
      <ul className='c_card_list p_code_view_card_list'>
        {
          editFilePaths.map((item: any, index) => {
            return (
              <li
                key={index}
                className='c_card_list_item'
              >
                <div className='c_card_list_item_main'>
                  <iframe
                    src={`${item}?iframe=1`}
                    className='c_iframe'
                    scrolling='no'
                    loading='lazy'
                  />
                </div>
                <div className='c_card_list_item_other u_mt16'>
                  <p><Link href={ item }>{ item }</Link></p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default CodeViewCardList