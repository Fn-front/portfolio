import LayoutSign from '@/components/Layout/Auth/Sign'
import HeadLine from '@/components/Ui/HeadLine'
import UserName from './components/UserName'
import UserPassword from './components/UserPassword'

export const UserLogin = () => {

  return (
    <>
      <LayoutSign>
        <HeadLine Component='h2' label="ログイン" />
        <UserName />
        <UserPassword />
      </LayoutSign>
    </>
  )
}

export default UserLogin