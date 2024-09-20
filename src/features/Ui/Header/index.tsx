import Header from '@/components/Ui/Header';
import UiHeaderLogout from './components/logout';
import UiHeaderLogin from './components/login';

export const UiHeader = () => {
  return (
    <Header>
      <div>
        {/* 予定地 */}
      </div>
      <div className='c_header_user_info'>
        <UiHeaderLogin />
        <UiHeaderLogout />
      </div>
    </Header>
  );
};

export default UiHeader;
