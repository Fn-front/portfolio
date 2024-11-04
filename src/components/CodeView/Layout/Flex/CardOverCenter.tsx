import Image from 'next/image';
import { getFile } from '@/features/ReadFile';
import ComponentWrapper from '@/components/Layout/ComponentWrapper';

const Default = async () => {
  const contentPath = './src/styles/components/card/';
  const contentFile = '_dark.scss';
  const content: string = await getFile(contentPath, contentFile);

  return (
    <>
      <h3 className='c_h3 u_mt40'>リスト センター寄せ 横スクロール</h3>
      <ComponentWrapper>
        <div className='flex_overflow'>
          <ul className='c_card_list c_card_list_dark'>
            <li className='c_card_list_item'>
              <div className='c_card_list_item_main'>
                <div className='c_next_image_wrapper'>
                  <Image
                    src='/assets/img/1920x1080.png'
                    alt='Sample Image'
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
                    src='/assets/img/1920x1080.png'
                    alt='Sample Image'
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
                    src='/assets/img/1920x1080.png'
                    alt='Sample Image'
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
      </ComponentWrapper>
      <ComponentWrapper styleCode={content}>
        <div className='flex_overflow_wrapper'>
          <ul className='c_card_list c_card_list_dark'>
            <li className='c_card_list_item'>
              <div className='c_card_list_item_main'>
                <div className='c_next_image_wrapper'>
                  <Image
                    src='/assets/img/1920x1080.png'
                    alt='Sample Image'
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
                    src='/assets/img/1920x1080.png'
                    alt='Sample Image'
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
                    src='/assets/img/1920x1080.png'
                    alt='Sample Image'
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
                    src='/assets/img/1920x1080.png'
                    alt='Sample Image'
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
                    src='/assets/img/1920x1080.png'
                    alt='Sample Image'
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
      </ComponentWrapper>
    </>
  );
};

export default Default;
