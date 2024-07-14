import UiForm from '@/app/codeView/@views/ui/form'
import UiLayout from '@/app/codeView/@views/ui/layout'

export default function codeView() {
  return (
    <>
      <h1 className='c_h1 u_ta_center'>
        <span className='c_h1_inner_underline'>UI</span>
      </h1>
      <UiForm />
      <UiLayout />
    </>
  );
}
