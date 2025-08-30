import AchievementsList from '@/components/Ui/AchievementsList';

export const ProfileAchievements = () => {
  return (
    <>
      <h1 className='c_h2 u_mt40'>Achievements</h1>
      <div className='c_achievements u_mt36'>
        <AchievementsList />
      </div>
    </>
  )
}

export default ProfileAchievements