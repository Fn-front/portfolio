'use client';

import LayoutSign from '@/components/Layout/Auth/Sign';
import HeadLine from '@/components/Ui/HeadLine';
import InputText from '@/components/Ui/Form/InputText';
import AuthFormComponent from '@/components/Layout/Auth/Form';
import Button from '@/components/Ui/Button';
import { useForm } from 'react-hook-form';
import { login, loginType } from '@/functions/schema/user/login'
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';


type Submit = {
  email: string
  password: string
}

export const UserLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginType>({
    mode: 'onBlur',
    criteriaMode: 'all',
    resolver: zodResolver(login)
  });
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string>('')

  // リダイレクト前URl情報
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || '/'

  const handleFormSubmit = async (data: Submit) => {
    await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    })
      .then((res) => {
        if (res?.error) {
          setErrorMessage(res.error)
        }
        router.push(callbackUrl)
      })
      .catch((err) => {
        setErrorMessage(err)
      })
  };

  return (
    <>
      <LayoutSign>
        <HeadLine Component='h2' label='ログイン' />
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <AuthFormComponent mt='32'>
            <InputText
              label='email'
              error={errors.email}
              placeholder='user name'
              {...register('email', {
                required: true
              })}
            />
          </AuthFormComponent>
          <AuthFormComponent mt='32'>
            <InputText
              label='password'
              error={errors.password}
              placeholder='user password'
              {...register('password', {
                required: true
              })}
            />
          </AuthFormComponent>
          <div className='u_mt16 u_ta_center'>
            {errorMessage && <p className='c_text_error u_mt8'>{errorMessage}</p>}
          </div>
          <Button type='submit' label='送信' mt='32' position='center' />
        </form>
      </LayoutSign>
    </>
  );
};

export default UserLogin;
