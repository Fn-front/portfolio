// @ts-ignore
import recursiveReaddir from 'recursive-readdir'

export const getFileDir = async (dir: string) => {
  const files = await recursiveReaddir(dir)
  const deleteDir = 'src/app/'

  const pathnames = files.map((file: string) => {
    const pathname = file
      .replace(deleteDir, '')
      .replace(/.[jt]sx?$/, '')
      .replace('page', '')
    return pathname
  })
  // .filter((file: string) => !/^_.+/.test(file))
  // .filter((file: string) => file !== "index")

  return pathnames
}
