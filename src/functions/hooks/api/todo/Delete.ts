import { deleteList } from './types';

export const deleteData = async (data: deleteList) => {
	const { ids } = data;
	const res = await fetch('/api/todo', {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			ids: ids,
		}),
	});

	return res.json();
};
