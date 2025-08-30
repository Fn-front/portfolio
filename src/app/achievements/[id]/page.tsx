import { getAchievementDetail } from '@/functions/actions/getAchievementDetail';
import ProfileAchievementsDetail from '@/features/Profile/achievements/detail';

export default async function ProfileAchievementsAboutPage({
  params,
}: {
  params: { id: string };
}) {
  const result = await getAchievementDetail(params.id);

  if (result.error) {
    return <div>{result.error}</div>;
  }

  return (
    <>
      <ProfileAchievementsDetail content={result.content!} />
    </>
  );
}