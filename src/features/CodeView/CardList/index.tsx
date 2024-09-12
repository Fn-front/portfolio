import Link from 'next/link'
import { deleteAuthenticated } from '@/utils/editFilePaths'

type Props = {
  editFilePaths?: Array<string>
}

export const CodeViewCardList = async (props: Props) => {
  const { editFilePaths } = props

  return (
    <div className='p_code_view_card_list u_mt16'>
      <ul className='c_card_list c_card_list_dark'>
        {editFilePaths?.map((item: string, index) => {
          return (
            <li key={index} className='c_card_list_item'>
              <div className='c_card_list_item_main'>
                <div
                  className='p_code_view_card_list_main_image'
                  style={{
                    backgroundImage:
                      'url(/assets/img' +
                      deleteAuthenticated(item.slice(0, item.length - 1)) +
                      '.png)',
                  }}
                ></div>
              </div>
              <div className='c_card_list_item_other'>
                <p>
                  <Link href={deleteAuthenticated(item)}>{deleteAuthenticated(item)}</Link>
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CodeViewCardList
