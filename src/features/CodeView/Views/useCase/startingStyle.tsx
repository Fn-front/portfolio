import {} from 'react'
import { getFileDir } from '@/hooks/System/GetFileDir'
import CodeViewCardList from '@/components/Ui/CodeViewCardList'

export default async function ViewUiForm() {

  const filePaths = await getFileDir('./src/app/(authenticated)/codeView/useCase/')
  const editFilePaths = Object.entries(filePaths).map(([num, path]) => (path))  

  return (
    <>
      <h2 className='c_h2 u_mt32'>CSS</h2>
      <CodeViewCardList editFilePaths={editFilePaths} />
    </>
  );
}