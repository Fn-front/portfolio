'use client'

import LayoutSign from '@/components/Layout/Auth/Sign'
import HeadLine from '@/components/Ui/HeadLine'
import InputText from '@/components/Ui/Form/InputText'
import AuthFormComponent from '@/components/Layout/Auth/Form'
import { errorMessageInputText, errorMessageMaxLength } from '@/functions/constants/schema'
import Button from '@/components/Ui/Button'
import { useForm } from 'react-hook-form';

export const UserLogin = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    criteriaMode: 'all',
  })

  const handleFormSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <>
      <LayoutSign>
        <HeadLine Component='h2' label="ログイン" />
        <form onSubmit={handleSubmit(handleFormSubmit)}>
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
                    message: '8' + errorMessageMaxLength,
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
                    message: '8' + errorMessageMaxLength,
                  },
                }
              )}
            />
          </AuthFormComponent>
          <Button
            type='submit'
            label='送信'
            mt='32'
            position='center'
          />
        </form>
      </LayoutSign>
    </>
  )
}

export default UserLogin