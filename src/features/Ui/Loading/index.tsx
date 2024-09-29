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
        {visible && (
          <div className='c_loading_item'>
            <CircularProgressIcon />
          </div>
        )}
      </div>
    </>
  );
};

export default Loading;
