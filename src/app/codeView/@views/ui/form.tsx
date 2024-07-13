import {} from 'react'
import Link from 'next/link'
import { getFileDir } from '@/features/GetFileDir/getFileDir'

export default async function viewUiForm() {

  const test = await getFileDir('./src/app/codeView/ui')
  const test2 = Object.entries(test).map(([num, path]) => (path))  

  return (
    <>
      { test2.map((item: any, index) => {
        return (
          <div key={index}>
            <Link href={ item }>{ item }</Link>
          </div>
        )
      })
      }
    </>
  );
}