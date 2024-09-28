import { getFileDir } from '@/functions/hooks/system/getFileDir';
import { viewsDir } from '@/functions/constants/paths';
import CodeViewCardList from '../../CardList';

export const ViewUiForm = () => {
  const filePaths = getFileDir(viewsDir + 'codeView/ui/layout/');

  return (
    <>
      <h2 className='c_h2 u_mt32'>Layout</h2>
      <CodeViewCardList editFilePaths={filePaths} />
    </>
  );
}

export default ViewUiForm
