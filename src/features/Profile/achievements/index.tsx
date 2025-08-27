'use client';

import { useEffect } from 'react';
import { Achievement } from '@/functions/types/achievement';
import { useAchievements } from '@/functions/hooks/useAchievements';
import Image from 'next/image'

export const ProfileAchievements = () => {
  const { data, errorMessage, loading, fetchAchievements } = useAchievements();

  useEffect(() => {
    fetchAchievements();
  }, [fetchAchievements]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {data && !errorMessage && (
        <ul className='c_card_list c_card_list_dark'>
          {data.map((item: Achievement) => (
            <li key={item.id} className='c_card_list_item'>
              <a href={`/achievements/${item.id}`}>
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