import UiForm from '@/features/CodeView/Views/ui/form'
import UiLayout from '@/features/CodeView/Views/ui/layout'
import UseCaseStartingStyle from '@/features/CodeView/Views/useCase/startingStyle'

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
