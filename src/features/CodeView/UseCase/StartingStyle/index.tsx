import { getFile } from '@/features/ReadFile'
import ComponentWrapper from '@/components/Layout/ComponentWrapper'
import Animation from './Animation'
import Transition from './Transition'

export const StartingStyle = async() => {
  
  const contentPath = '/src/styles/project/useCase/startingStyle/_starting_style_animation.scss'
  const content: string = await getFile(contentPath)

  return (
    <>
      <h3 className='c_h3'>animationは、display: noneでも動く</h3>
      <ComponentWrapper styleCode={content}>
        <Animation />
      </ComponentWrapper>
      <h3 className='c_h3 u_mt40'>Transition @starting-style 設定あり</h3>
      <ComponentWrapper styleCode={content}>
        <Transition />
      </ComponentWrapper>
    </>
  )
}

export default StartingStyle