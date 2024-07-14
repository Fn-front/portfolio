import {} from 'react'
import { getFileDir } from '@/features/GetFileDir/getFileDir'
import CodeViewCardList from '@/components/Ui/CodeViewCardList'

export default async function ViewUiForm() {

  const filePaths = await getFileDir('./src/app/codeView/ui')
  const editFilePaths = Object.entries(filePaths).map(([num, path]) => (path))  

  return (
    <>
      <CodeViewCardList editFilePaths={editFilePaths} />
    </>
  );
}