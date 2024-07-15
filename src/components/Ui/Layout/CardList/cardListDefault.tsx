import Image from 'next/image'
import CodeBlock from '@/components/Ui/Code'
import { getFile } from '@/features/ReadFile'

const Default = async() => {
  
  const contentPath = '/src/styles/components/card/_default.scss'
  const content: string = await getFile(contentPath)

  return (
    <>
      <h3 className='c_h3'>デフォルト</h3>
      <div className='l_component_wrapper u_mt16'>
        <ul className='c_card_list'>
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
                <p>ダミーテキスト</p>
              </div>
          </li>
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
                <p>ダミーテキスト</p>
              </div>
          </li>
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
                <p>ダミーテキスト</p>
              </div>
          </li>
        </ul>
      </div>
      <CodeBlock content={content} />
    </>
  )
}

export default Default;