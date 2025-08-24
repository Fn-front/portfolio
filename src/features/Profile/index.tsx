import ProfileAchievements from './components/achievements'
import ProfileInfo from './components/info'
import ProfileSkill from './components/skill'

export const Profile = () => {

  return (
    <>
      <ProfileInfo />
      <ProfileSkill />
      <ProfileAchievements />
    </>
  )
}

export default Profile