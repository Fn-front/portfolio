import { getFileDir } from '@/functions/hooks/system/getFileDir';
import CodeViewCardList from '../../CardList';

export const ViewUiForm = async () => {
  const filePaths = await getFileDir('/codeView/useCase/');

  return (
    <>
      <h2 className='c_h2 u_mt32'>CSS</h2>
      <CodeViewCardList editFilePaths={filePaths} />
    </>
  );
}

export default ViewUiForm;
