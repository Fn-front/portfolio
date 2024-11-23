import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import UserInfoLogout from '@/features/Ui/Header/components/logout';

type Props = {
  info: {
    name: string;
    email: string;
    image: string;
    role: string;
  };
};

export const UiHeaderLogout = (props: Props) => {
  const { info } = props;

  const handleNameLength = (char: string) => {
    const maxLength = 5;
    if (char) {
      const length = char.length;

      if (length > maxLength) {
        char = char.slice(0, maxLength) + '...';
      }
    }

    return char;
  };

  return (
    <div className='c_header_user_info'>
      <div className='c_header_user_info_name'>
        <AccountCircleIcon fontSize='large' sx={{ fontSize: '3rem' }} />
        <div className='c_header_user_info_name_container'>
          <span className='c_header_user_info_name_main'>
            {info && handleNameLength(info.name)}
          </span>{' '}
          さん
        </div>
        <ArrowDropDownIcon fontSize='large' />
      </div>
      <div className='c_header_user_info_drop'>
        <UserInfoLogout />
      </div>
    </div>
  );
};

export default UiHeaderLogout;
