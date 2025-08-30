'use client';

import MarkdownRenderer from '@/components/Formatters/MarkdownRenderer';

type ProfileAchievementsDetailProps = {
  content: string;
}

export const ProfileAchievementsDetail = ({
  content
}: Readonly<ProfileAchievementsDetailProps>) => {
  return (
    <div>
      <MarkdownRenderer content={content} />
    </div>
  );
}

export default ProfileAchievementsDetail;