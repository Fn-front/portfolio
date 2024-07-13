import { useEffect } from 'react'
import { getFileDir } from '@/hooks/CodeView/getFileDir'

export default async function viewUiForm() {

  const test = await getFileDir('./src/app/codeView/ui')

  return (
    <p>{ test }</p>
  );
}