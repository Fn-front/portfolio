// import Image from 'next/image'

type ProfileAchievementsDetailProps = {
  params: string;
}

export const ProfileAchievementsDetail = async (
  {
    params
  }: Readonly<ProfileAchievementsDetailProps>) => {

  const response = await fetch(`http://localhost:2937/api/profile/achievement/${params}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: params }),
  });

  const data = await response.json()

  console.log(data);


  return (
    <>
      {data && (
        <>
          <p>{data.title}</p>
          <p>{data.content}</p>
        </>
      )}
    </>
  )
}

export default ProfileAchievementsDetail;