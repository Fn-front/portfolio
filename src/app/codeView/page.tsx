import UiForm from '@/app/codeView/@views/ui/form'
import UiLayout from '@/app/codeView/@views/ui/layout'

export default function codeView() {
  return (
    <>
      <h1 className='c_h1 u_ta_center'>
        <span className='c_h1_inner_underline'>UI</span>
      </h1>
      <UiForm />
      <h1 className='c_h1 u_ta_center u_mt40'>
        <span className='c_h1_inner_underline'>Layout</span>
      </h1>
      <UiLayout />
    </>
  );
}
