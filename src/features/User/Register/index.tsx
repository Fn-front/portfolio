'use client';

import LayoutSign from '@/components/Layout/Auth/Sign';
import HeadLine from '@/components/Ui/HeadLine';
import InputText from '@/components/Ui/Form/InputText';
import AuthFormComponent from '@/components/Layout/Auth/Form';
import Button from '@/components/Ui/Button';
import { useForm } from 'react-hook-form';
import { SchemaRegister, registerType } from '@/functions/schema/user/register'
import { zodResolver } from "@hookform/resolvers/zod";

export const UserLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerType>({
    mode: 'onBlur',
    criteriaMode: 'all',
    resolver: zodResolver(SchemaRegister)
  });

  const handleFormSubmit = (data: object) => {
    console.log(data);
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
              placeholder='user name'
              {...register('name', {
                required: true
              })}
            />
          </AuthFormComponent>
          <AuthFormComponent mt='32'>
            <InputText
              label='email'
              error={errors.email}
              placeholder='email'
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
          <AuthFormComponent mt='32'>
            <InputText
              label='role'
              error={errors.role}
              placeholder='role'
              {...register('role', {
                required: true
              })}
            />
          </AuthFormComponent>
          <Button type='submit' label='送信' mt='32' position='center' />
        </form>
      </LayoutSign>
    </>
  );
};

export default UserLogin;
