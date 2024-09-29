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
import Loading from '@/features/Ui/Loading';

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
      role: 'admin',
    },
  });
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const radioData = ['admin', 'user', 'mock', 'codeView'];

  const handleFormSubmit = async (data: Submit) => {
    // ローディング開始
    setLoading(true);
    const res = await userRegister(data);
    setErrorMessage(res.message);
    // ローディング停止
    setLoading(false);
  };

  return (
    <>
      <Loading visible={loading}>
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
            {errorMessage && (
              <div className='u_mt16 u_ta_center'>
                <p className='c_text_error u_mt8'>{errorMessage}</p>
              </div>
            )}
            <Button type='submit' label='送信' mt='32' position='center' />
          </form>
        </LayoutSign>
      </Loading>
    </>
  );
};

export default UserLogin;
