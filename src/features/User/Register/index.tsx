'use client';

import { useState } from 'react';
import LayoutSign from '@/components/Layout/Auth/Sign';
import HeadLine from '@/components/Ui/HeadLine';
import InputText from '@/components/Ui/Form/InputText';
import Radio from '@/components/Ui/Form/Radio';
import AuthFormComponent from '@/components/Layout/Auth/Form';
import Button from '@/components/Ui/Button';
import { useForm } from 'react-hook-form';
import { SchemaRegister, registerType } from '@/functions/schema/user/register';
import { zodResolver } from '@hookform/resolvers/zod';
import { userRegister } from '@/functions/hooks/api/auth/user/Register';

type Submit = {
  name: string;
  email: string;
  password: string;
  role: string;
};

export const UserLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerType>({
    mode: 'onBlur',
    criteriaMode: 'all',
    resolver: zodResolver(SchemaRegister),
  });
  const [errorMessage, setErrorMessage] = useState<string>('');

  const radioData = ['admin', 'user', 'mock', 'codeView'];

  const handleFormSubmit = async (data: Submit) => {
    const res = await userRegister(data);
    setErrorMessage(res.message);
  };

  return (
    <>
      <LayoutSign>
        <HeadLine Component='h2' label='新規ユーザー登録' />
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <AuthFormComponent mt='32'>
            <InputText
              label='name'
              error={errors.name}
              errorBg={true}
              placeholder='user name'
              {...register('name', {
                required: true,
              })}
            />
          </AuthFormComponent>
          <AuthFormComponent mt='32'>
            <InputText
              label='email'
              error={errors.email}
              errorBg={true}
              placeholder='email'
              {...register('email', {
                required: true,
              })}
            />
          </AuthFormComponent>
          <AuthFormComponent mt='32'>
            <InputText
              label='password'
              error={errors.password}
              errorBg={true}
              placeholder='user password'
              {...register('password', {
                required: true,
              })}
            />
          </AuthFormComponent>
          <AuthFormComponent mt='32'>
            <Radio
              label='role'
              error={errors.role}
              data={radioData}
              {...register('role', {
                required: true,
              })}
            />
          </AuthFormComponent>
          <div className='u_mt16 u_ta_center'>
            {errorMessage && (
              <p className='c_text_error u_mt8'>{errorMessage}</p>
            )}
          </div>
          <Button type='submit' label='送信' mt='32' position='center' />
        </form>
      </LayoutSign>
    </>
  );
};

export default UserLogin;
