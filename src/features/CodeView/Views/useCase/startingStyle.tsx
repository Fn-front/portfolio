import { getFileDir } from '@/functions/hooks/system/getFileDir'
import { viewsDir } from '@/functions/constants/paths'
import CodeViewCardList from '../../CardList'

export default async function ViewUiForm() {
  const filePaths = await getFileDir(viewsDir + 'codeView/useCase/')

  return (
    <>
      <h2 className='c_h2 u_mt32'>CSS</h2>
      <CodeViewCardList editFilePaths={filePaths} />
    </>
  )
}
