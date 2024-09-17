import { register } from './types';

export const userRegister = async (data: register) => {
  const { name, email, password, role } = data;
  const res = await fetch('/api/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      role: role,
    }),
  });

  return res.json();
};
