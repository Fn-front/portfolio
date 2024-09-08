'use client'

import InputText from '@/components/Ui/Form/InputText'
import AuthFormComponent from '@/components/Layout/Auth/Form'
import { errorMessageInputText } from '@/functions/constants/schema'
import { useForm } from 'react-hook-form';

export const UserName = () => {

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
    </>
  )
}

export default UserName;