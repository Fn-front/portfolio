import {} from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  editFilePaths: unknown[]
}

export const CodeViewCardList = async(props: Props) => {

  const { editFilePaths } = props

  return (
    <div className='p_code_view_card_list u_mt16'>
      <ul className='c_card_list c_card_list_dark'>
        {
          editFilePaths.map((item: any, index) => {
            return (
              <li
                key={index}
                className='c_card_list_item'
              >
                <div className='c_card_list_item_main'>
                  <div className='c_next_image_wrapper'>
                    <Image
                      src={`/assets/img/${item.slice(0, item.length - 1)}.png`}
                      alt="Sample Image"
                      className='c_next_image'
                      sizes='100%'
                      fill
                      priority
                    />
                  </div>
                </div>
                <div className='c_card_list_item_other'>
                  <p><Link href={ item }>{ item }</Link></p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default CodeViewCardList