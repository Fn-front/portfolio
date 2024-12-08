// import { useGetAchievement } from '@/functions/hooks/api/profile/achievement/Get'
import { Achievement } from '@/functions/hooks/api/profile/achievement/type'
import Image from 'next/image'

export const ProfileAchievements = async () => {

  const response = await fetch('http://localhost:2937/api/profile/achievement');

  const data = await response.json()

  return (
    <>
      <ul className='c_card_list c_card_list_dark'>
        {data && data.map((item: Achievement) => (
          <li key={item.id} className='c_card_list_item'>
            <a href={`/profile/achievements/${item.id}`}>
              <div className='c_card_list_item_main'>
                <div className='c_next_image_wrapper'>
                  <Image
                    src={item.imagePath}
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
    </>
  )
}

export default ProfileAchievements;