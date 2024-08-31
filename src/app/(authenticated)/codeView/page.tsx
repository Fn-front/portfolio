import UiForm from '@/app/codeView/_views/ui/form'
import UiLayout from '@/app/codeView/_views/ui/layout'
import UseCaseStartingStyle from '@/app/codeView/_views/useCase/startingStyle'

export default function codeView() {
  return (
    <>
      <h1 className='c_h1 u_ta_center'>
        <span className='c_h1_inner_underline'>UI</span>
      </h1>
      <UiForm />
      <UiLayout />
      <h1 className='c_h1 u_ta_center u_mt32'>
        <span className='c_h1_inner_underline'>useCase</span>
      </h1>
      <UseCaseStartingStyle />
    </>
  );
}
