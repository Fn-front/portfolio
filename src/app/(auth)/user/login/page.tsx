'use client'

import LayoutSign from '@/components/Layout/Auth/Sign'
import InputText from '@/components/Ui/Form/InputText'
import AuthFormComponent from '@/components/Layout/Auth/Form'
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
        <h2 className='c_h2'>ログイン</h2>
        <AuthFormComponent mt="32">
          <InputText
            label="name"
            error={errors.name}
            placeholder='user name'
            {...register('name', { required: true })}
          />
        </AuthFormComponent>
      </LayoutSign>
    </>
  );
}
