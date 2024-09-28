'use client';

import { useState } from 'react';
import LayoutSign from '@/components/Layout/Auth/Sign';
import HeadLine from '@/components/Ui/HeadLine';
import InputText from '@/components/Ui/Form/InputText';
import Radio from '@/components/Ui/Form/Radio';
import AuthFormComponent from '@/components/Layout/Auth/Form';
import Button from '@/components/Ui/Button';
import { useForm, Controller } from 'react-hook-form';
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
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<registerType>({
    mode: 'onBlur',
    criteriaMode: 'all',
    resolver: zodResolver(SchemaRegister),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      role: 'admin'
    },
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
            <Controller
              name='name'
              control={control}
              render={({ field }) => (
                <InputText
                  label={field.name}
                  error={errors.name}
                  placeholder='name'
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                />
              )}
            />
          </AuthFormComponent>
          <AuthFormComponent mt='32'>
            <Controller
              name='email'
              control={control}
              render={({ field }) => (
                <InputText
                  label={field.name}
                  error={errors.email}
                  placeholder='email'
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                />
              )}
            />
          </AuthFormComponent>
          <AuthFormComponent mt='32'>
            <Controller
              name='password'
              control={control}
              render={({ field }) => (
                <InputText
                  label={field.name}
                  error={errors.password}
                  placeholder='password'
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                />
              )}
            />
          </AuthFormComponent>
          <AuthFormComponent mt='32'>
            <Controller
              name='role'
              control={control}
              render={({ field }) => (
                <Radio
                  label={field.name}
                  error={errors.role}
                  data={radioData}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                  value={field.value}
                />
              )}
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
