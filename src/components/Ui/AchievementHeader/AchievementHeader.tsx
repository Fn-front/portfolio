'use client';

type AchievementHeaderProps = {
  title: string;
  date: string;
};

export const AchievementHeader = ({ title, date }: AchievementHeaderProps) => {
  return (
    <div className='achievement_header'>
      <h1 className='achievement_header_title'>{title}</h1>
      <div className='achievement_header_meta'>
        <span className='achievement_header_date'>
          <span>📅</span>
          <span>{date}</span>
        </span>
        <span className='achievement_header_role'>フロントエンドリード</span>
      </div>
    </div>
  );
};

export default AchievementHeader;
