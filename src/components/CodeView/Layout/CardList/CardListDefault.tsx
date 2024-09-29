import Image from 'next/image';
import { getFile } from '@/features/ReadFile';
import ComponentWrapper from '@/components/Layout/ComponentWrapper';

const Default = async () => {
  const contentPath = './src/styles/components/card/';
  const contentFile = '_default.scss';
  const content: string = await getFile(contentPath, contentFile);

  return (
    <>
      <h3 className='c_h3'>デフォルト</h3>
      <ComponentWrapper styleCode={content}>
        <ul className='c_card_list'>
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
      </ComponentWrapper>
    </>
  );
};

export default Default;
