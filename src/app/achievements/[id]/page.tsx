import { getAchievementDetail } from '@/functions/actions/getAchievementDetail';
import ProfileAchievementsDetail from '@/features/Profile/achievements/detail';

export default async function ProfileAchievementsAboutPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const result = await getAchievementDetail(id);

  if (result.error) {
    return <div>{result.error}</div>;
  }

  return (
    <>
      <ProfileAchievementsDetail
        content={result.content!}
        title={result.title!}
        date={result.date!}
        techStack={result.techStack || []}
      />
    </>
  );
}
