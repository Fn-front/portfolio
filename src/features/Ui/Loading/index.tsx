import CircularProgressIcon from '@/components/Icons/Loading';

export const Loading = ({
  children,
  visible,
}: Readonly<{
  children: React.ReactNode;
  visible: boolean;
}>) => {
  return (
    <>
      <div className='c_loading'>
        {children}
        {visible && <CircularProgressIcon />}
      </div>
    </>
  );
};

export default Loading;
