import { Achievement } from '@/functions/types/achievement';
import { handleFetchError } from '@/utils/errorHandler';
import Image from 'next/image'

export const ProfileAchievements = async () => {

  let response;
  let data;
  let errorMessage;

  try {
    response = await fetch('http://localhost:2937/api/profile/achievement');

    data = await response.json()
  } catch {
    errorMessage = handleFetchError(response!)
  }

  return (
    <>
      {data && !errorMessage && (
        <ul className='c_card_list c_card_list_dark'>
          {data.map((item: Achievement) => (
            <li key={item.id} className='c_card_list_item'>
              <a href={`/profile/achievements/${item.id}`}>
                <div className='c_card_list_item_main'>
                  <div className='c_next_image_wrapper'>
                    <Image
                      src={item.thumbnail}
                      alt='Sample Image'
                      className='c_next_image'
                      objectFit='contain'
                      fill
                      priority
                    />
                  </div>
                </div>
                <div className='c_card_list_item_other'>
                  <p>{item.title}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </>
  )
}

export default ProfileAchievements;