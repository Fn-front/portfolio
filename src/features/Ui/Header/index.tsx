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
      <UiHeaderUserInfo info={session?.user} />
    </Header>
  );
};

export default UiHeader;
