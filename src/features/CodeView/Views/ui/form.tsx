const path = require('path');
const fs = require('fs');
import { getFileDir } from '@/hooks/System/GetFileDir'
import CodeViewCardList from '@/components/Ui/CodeViewCardList'

export default async function ViewUiForm() {

  const filePaths = await getFileDir('./src/app/(authenticated)/codeView/ui/form/')
  const editFilePaths = Object.entries(filePaths).map(([num, path]) => (path))  

  return (
    <>
      <h2 className='c_h2 u_mt32'>Form</h2>
      <CodeViewCardList editFilePaths={editFilePaths} />
    </>
  );
}