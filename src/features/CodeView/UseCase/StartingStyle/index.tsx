import { getFile } from '@/features/ReadFile'
import ComponentWrapper from '@/components/Layout/ComponentWrapper'
import Animation from './Animation'

export const StartingStyle = async() => {
  
  const contentPath = '/src/styles/components/form/checkBox/_default.scss'
  const content: string = await getFile(contentPath)

  return (
    <>
      <h3 className='c_h3'>animationは、display: noneでも動く</h3>
      <ComponentWrapper styleCode={content}>
        <Animation />
      </ComponentWrapper>
    </>
  )
}

export default StartingStyle