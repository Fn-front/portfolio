import { getFile } from '@/features/ReadFile'
import ComponentWrapper from '@/components/Layout/ComponentWrapper'
import Animation from './Animation'
import Transition from './Transition'
import TransitionNot from './TransitionNot'

export const StartingStyle = async () => {
  const contentPath1 = '/src/styles/project/useCase/startingStyle/_starting_style_animation.scss'
  const content1: string = await getFile(contentPath1)

  const contentPath2 = '/src/styles/project/useCase/startingStyle/_starting_style_transition.scss'
  const content2: string = await getFile(contentPath2)

  const contentPath3 =
    '/src/styles/project/useCase/startingStyle/_starting_style_transition_not.scss'
  const content3: string = await getFile(contentPath3)

  return (
    <>
      <div className='c_explanation'>
        <p>いままでdisplay: noneからblockへのプロパティ変更ではアニメーションが効かなかったが</p>
        <p>@starting-styleで切替時のアニメーションが可能になった</p>
        <p>ただdisplay: blockからnoneへの切替時のアニメーションはできない</p>
      </div>
      <h3 className='c_h3 u_mt40'>animationは、display: noneでも動く</h3>
      <ComponentWrapper styleCode={content1}>
        <Animation />
      </ComponentWrapper>
      <h3 className='c_h3 u_mt40'>Transition @starting-style 設定あり</h3>
      <ComponentWrapper styleCode={content2}>
        <Transition />
      </ComponentWrapper>
      <h3 className='c_h3 u_mt40'>Transition @starting-style 設定なし</h3>
      <ComponentWrapper styleCode={content3}>
        <TransitionNot />
      </ComponentWrapper>
    </>
  )
}

export default StartingStyle
