import { handleFetchError } from '@/utils/errorHandler';
import Image from 'next/image'

type ProfileAchievementsDetailProps = {
  params: string;
}

export const ProfileAchievementsDetail = async (
  {
    params
  }: Readonly<ProfileAchievementsDetailProps>) => {

  let response;
  let data;
  let errorMessage;

  try {
    response = await fetch(`http://localhost:2937/api/profile/achievement/${params}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: params }),
    });

    if (response.ok) {
      data = await response.json()
    }
    else {
      errorMessage = handleFetchError(response)
    }

  } catch {
    errorMessage = handleFetchError(response!)
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