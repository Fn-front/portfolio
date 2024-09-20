import Header from '@/components/Ui/Header';
import UiHeaderUserInfo from './components/userInfo/';
import { getServerSession } from 'next-auth';
import options from '@/lib/nextAuth/options';

export const UiHeader = async () => {
  const session = await getServerSession(options)
  return (
    <Header>
      <div>
        {/* 予定地 */}
      </div>
      <div className='c_header_user_info'>
        <UiHeaderUserInfo info={session?.user} />
      </div>
    </Header>
  );
};

export default UiHeader;
