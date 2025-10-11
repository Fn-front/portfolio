'use client';

import MarkdownRenderer from '@/components/Formatters/MarkdownRenderer';
import 'github-markdown-css/github-markdown.css';

type ProfileAchievementsDetailProps = {
  content: string;
}

export const ProfileAchievementsDetail = ({
  content
}: Readonly<ProfileAchievementsDetailProps>) => {
  return (
    <div className="markdown_body">
      <MarkdownRenderer content={content} />
    </div>
  );
}

export default ProfileAchievementsDetail;