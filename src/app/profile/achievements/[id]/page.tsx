import ProfileAchievementsDetail from '@/features/Profile/achievements/detail';

export default async function ProfileAchievementsAboutPage({
  params,
}: {
  params: { id: string };
}) {

  return (
    <>
      <ProfileAchievementsDetail params={params.id} />
    </>
  )
}