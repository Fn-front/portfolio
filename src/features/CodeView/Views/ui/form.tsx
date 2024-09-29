import { getFileDir } from '@/functions/hooks/system/getFileDir';
import CodeViewCardList from '../../CardList';

export const ViewUiForm = async () => {
  const filePaths = await getFileDir('/codeView/ui/form/');

  return (
    <>
      <h2 className='c_h2 u_mt32'>Form</h2>
      <CodeViewCardList editFilePaths={filePaths} />
    </>
  );
};

export default ViewUiForm;
