import { handleFetchError } from '@/utils/errorHandler';
import Image from 'next/image'

type ProfileAchievementsDetailProps = {
  id: string;
}

export const ProfileAchievementsDetail = async (
  {
    id
  }: Readonly<ProfileAchievementsDetailProps>) => {

  let response;
  let data;
  let errorMessage;

  try {
    response = await fetch(`http://localhost:2937/api/profile/achievement/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    });

    if (response.ok) {
      data = await response.json()
    }
    else {
      errorMessage = handleFetchError(response)
    }

  } catch (error) {
    // response が undefined の可能性があるためエラーオブジェクトを使用
    errorMessage = error instanceof Error ? error.message : 'An error occurred';
  }

  return (
    <>
      {data && !errorMessage && (
        <>
          <p>{data.title}</p>
          <p>{data.content}</p>
          {data.imagePath.map((item: string, index: number) => (
            <div key={index}>
              <Image src={item} alt='' width={100} height={100} priority />
            </div>
          ))}
        </>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </>
  )
}

export default ProfileAchievementsDetail;