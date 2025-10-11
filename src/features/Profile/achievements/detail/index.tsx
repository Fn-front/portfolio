'use client';

import AchievementHeader from '@/components/Ui/AchievementHeader/AchievementHeader';
import MarkdownRenderer from '@/components/Formatters/MarkdownRenderer';
import TechStackList from '@/components/TechStack/TechStackList';
import 'github-markdown-css/github-markdown.css';

type ProfileAchievementsDetailProps = {
  content: string;
  title: string;
  date: string;
}

export const ProfileAchievementsDetail = ({
  content,
  title,
  date
}: Readonly<ProfileAchievementsDetailProps>) => {
  return (
    <>
      <AchievementHeader title={title} date={date} />
      <div className="markdown_body">
        <h2>使用技術</h2>
        <TechStackList />
        <MarkdownRenderer content={content} />
      </div>
    </>
  );
}

export default ProfileAchievementsDetail;