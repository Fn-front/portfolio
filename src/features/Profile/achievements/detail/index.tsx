'use client';

import AchievementHeader from '@/components/Ui/AchievementHeader/AchievementHeader';
import MarkdownRenderer from '@/components/Formatters/MarkdownRenderer';
import TechStackList from '@/components/TechStack/TechStackList';
import 'github-markdown-css/github-markdown.css';

type TechStack = {
  name: string;
  icon?: string;
};

type ProfileAchievementsDetailProps = {
  content: string;
  title: string;
  date: string;
  techStack: TechStack[];
}

export const ProfileAchievementsDetail = ({
  content,
  title,
  date,
  techStack
}: Readonly<ProfileAchievementsDetailProps>) => {
  return (
    <>
      <AchievementHeader title={title} date={date} />
      <div className="markdown_body">
        <h2>使用技術</h2>
        <TechStackList techStack={techStack} />
        <MarkdownRenderer content={content} />
      </div>
    </>
  );
}

export default ProfileAchievementsDetail;