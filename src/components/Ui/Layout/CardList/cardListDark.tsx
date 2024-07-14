import Image from 'next/image'
import CodeBlock from '@/components/Ui/Code'
import { getFile } from '@/features/ReadFile'

const Default = async() => {
  
  const contentPath = '/src/styles/components/card/_dark.scss'
  const content: string = await getFile(contentPath)

  return (
    <>
      <h3 className='c_h3 u_mt40'>黒背景ver</h3>
      <div className='l_component_wrapper l_component_wrapper_dark u_mt16'>
        <ul className='c_card_list c_card_list_dark'>
          <li className='c_card_list_item'>
              <div className='c_card_list_item_main'>
                <Image
                  src="/assets/img/1920x1080.png"
                  alt="Sample Image"
                  className='c_next_image'
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className='c_card_list_item_other'>
                <p>ダミーテキスト</p>
              </div>
          </li>
          <li className='c_card_list_item'>
              <div className='c_card_list_item_main'>
                <Image
                  src="/assets/img/1920x1080.png"
                  alt="Sample Image"
                  className='c_next_image'
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className='c_card_list_item_other'>
                <p>ダミーテキスト</p>
              </div>
          </li>
          <li className='c_card_list_item'>
              <div className='c_card_list_item_main'>
                <Image
                  src="/assets/img/1920x1080.png"
                  alt="Sample Image"
                  className='c_next_image'
                  layout="fill"
                  objectFit="contain"
                />
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