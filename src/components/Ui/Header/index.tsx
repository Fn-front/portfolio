export const Header = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <header className={'l_header'}>
      <div className='l_header_in'>{children}</div>
    </header>
  );
};

export default Header;
