import { post } from './types'

export const addData = async(data: post) => {
  const { id, title, date, done } = data
  const res = await fetch('/api/todo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id: id,
        title: title,
        date: date,
        done: done
    })
  })

  return res.json()
}