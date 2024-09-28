import Link from 'next/link';

type Props = {
  editFilePaths?: Array<string>;
};

export const CodeViewCardList = (props: Props) => {
  const { editFilePaths } = props;

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
                      'url(/assets/img' + item + '.png)',
                  }}
                ></div>
              </div>
              <div className='c_card_list_item_other'>
                <p>
                  <Link href={item}>
                    {item}
                  </Link>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CodeViewCardList;
