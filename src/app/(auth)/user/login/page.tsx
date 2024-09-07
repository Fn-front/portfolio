'use client'

import LayoutSign from '@/components/Layout/Auth/Sign'
import InputText from '@/components/Ui/Form/InputText'
import AuthFormComponent from '@/components/Layout/Auth/Form'
import HeadLine from '@/components/Ui/HeadLine'
import { errorMessageInputText } from '@/functions/constants/schema'
import { useForm } from 'react-hook-form';

export default function Login() {

  const { 
    register, 
    handleSubmit, 
    formState: {errors} 
  } = useForm({
    mode: 'onBlur',
    criteriaMode: 'all',
  })

  return (
    <>
      <LayoutSign>
        <HeadLine Component='h2' label="ログイン" />
        <AuthFormComponent mt="32">
          <InputText
            label="name"
            error={errors.name}
            placeholder='user name'
            {...register('name', 
              {
                required: {
                  value: true,
                  message: 'name' + errorMessageInputText,
                },
                minLength: {
                  value: 8,
                  message: '8文字以上入力してください。',
                },
              }
            )}
          />
        </AuthFormComponent>
        <AuthFormComponent mt="32">
          <InputText
            label="password"
            error={errors.pass}
            placeholder='user password'
            {...register('pass', 
              {
                required: {
                  value: true,
                  message: 'password' + errorMessageInputText,
                },
                minLength: {
                  value: 8,
                  message: '8文字以上入力してください。',
                },
              }
            )}
          />
        </AuthFormComponent>
      </LayoutSign>
    </>
  );
}
