export const AuthSign = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='l_form_sign'>
      <div className='l_form_sign_inner'>{children}</div>
    </div>
  );
};

export default AuthSign;
