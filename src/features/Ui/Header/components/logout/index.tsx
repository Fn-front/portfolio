'use client';

import { signOut } from 'next-auth/react';

export const userInfoLogout = () => {
  const handleLogout = () => {
    signOut();
  };

  return (
    <>
      <button className='c_button' onClick={() => handleLogout()}>
        ログアウト
      </button>
    </>
  );
};

export default userInfoLogout;
