import { updateData } from './types';

export const update = async (data: updateData) => {
  const { id, title, date, done } = data;
  const res = await fetch('/api/todo', {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      id: id,
      title: title,
      date: date,
      done: done,
    }),
  });

  return res.json();
};
