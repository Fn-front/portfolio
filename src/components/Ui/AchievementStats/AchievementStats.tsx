'use client';

import StatCard from './StatCard';

export const AchievementStats = () => {
  return (
    <div className='achievement_stats'>
      <StatCard icon='📦' value='21.5MB' label='バンドル削減' />
      <StatCard icon='⚡' value='50%' label='平均削減率' />
      <StatCard icon='🗑️' value='60件' label='不要ファイル削除' />
    </div>
  );
};

export default AchievementStats;
