import { getFileDir } from '@/functions/hooks/system/getFileDir'
import { viewsDir } from '@/functions/constants/paths'
import CodeViewCardList from '../../CardList'

export default async function ViewUiForm() {
  const filePaths = await getFileDir(viewsDir + 'codeView/ui/layout/')
  const editFilePaths = Object.entries(filePaths).map(([path]) => path)

  return (
    <>
      <h2 className='c_h2 u_mt32'>Layout</h2>
      <CodeViewCardList editFilePaths={editFilePaths} />
    </>
  )
}
