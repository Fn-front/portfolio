'use client';

import AchievementsList from '@/components/Ui/AchievementsList';
import BreadcrumbsList from '@/features/BreadcrumbsList';

export const ProfileAchievements = () => {
  return (
    <>
      <BreadcrumbsList />
      <AchievementsList />
    </>
  );
};

export default ProfileAchievements;
