import { updateData } from './types'

export const update = (data: updateData) => {
  const { id, title, date, done } = data
  const res = fetch('/api/todo', {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
        id: id,
        title: title,
        date: date,
        done: done
    })
  })

  return res
}