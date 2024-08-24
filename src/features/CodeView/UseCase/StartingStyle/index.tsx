import { getFile } from '@/features/ReadFile'
import ComponentWrapper from '@/components/Layout/ComponentWrapper'
import Animation from './Animation'
import Transition from './Transition'

export const StartingStyle = async() => {
  
  const contentPath1 = '/src/styles/project/useCase/startingStyle/_starting_style_animation.scss'
  const content1: string = await getFile(contentPath1)

  const contentPath2 = '/src/styles/project/useCase/startingStyle/_starting_style_transition.scss'
  const content2: string = await getFile(contentPath2)

  return (
    <>
      <h3 className='c_h3'>animationは、display: noneでも動く</h3>
      <ComponentWrapper styleCode={content1}>
        <Animation />
      </ComponentWrapper>
      <h3 className='c_h3 u_mt40'>Transition @starting-style 設定あり</h3>
      <ComponentWrapper styleCode={content2}>
        <Transition />
      </ComponentWrapper>
    </>
  )
}

export default StartingStyle