const host = process.env.NEXT_PUBLIC_API_URL
import { deleteList } from './types'

export const deleteData = async(data: deleteList) => {
  const res = await fetch(host+'/api/todo', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: data
    })
  })

  return res.json()
}