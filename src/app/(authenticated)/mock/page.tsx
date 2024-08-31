import Link from 'next/link'
import Image from 'next/image'

export default function mock() {
  return (
    <div className='p_code_view_card_list u_mt16'>
      <ul className='c_card_list c_card_list_dark'>
        <li className='c_card_list_item'>
          <div className='c_card_list_item_main'>
            <div className='c_next_image_wrapper'>
              <Image
                src="/assets/img/1920x1080.png"
                alt="Sample Image"
                className='c_next_image'
                sizes='100%'
                fill
                priority
              />
            </div>
          </div>
          <div className='c_card_list_item_other'>
            <p>todoリスト</p>
            <p>Supabase, PostgreSQL</p>
            <p>API実装(Get, Delete, Post, Put)</p>
            <p><Link href='/mock/todo'>詳しく見る</Link></p>
          </div>
        </li>
      </ul>
    </div>
  )
}