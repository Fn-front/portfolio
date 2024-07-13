import {} from 'react'
import { getFileDir } from '@/features/CodeView/getFileDir'

export default async function viewUiForm() {

  const test = await getFileDir('./src/app/codeView/ui')

  return (
    <p>{ test }</p>
  );
}