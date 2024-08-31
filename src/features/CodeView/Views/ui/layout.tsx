import { getFileDir } from '@/functions/hooks/System/GetFileDir'
import CodeViewCardList from '@/components/Ui/CodeViewCardList'
import { viewsDir } from '@/functions/constants/paths'

export default async function ViewUiForm() {

  const filePaths = await getFileDir(viewsDir+'codeView/ui/layout/')
  const editFilePaths = Object.entries(filePaths).map(([num, path]) => (path))  

  return (
    <>
      <h2 className='c_h2 u_mt32'>Layout</h2>
      <CodeViewCardList editFilePaths={editFilePaths} />
    </>
  );
}