import path from 'path'
import fs from 'fs'

export const getFile = async (targetPath: string) => {
  const filename = path.join(process.cwd(), targetPath)
  const fileContents = fs.readFileSync(filename, 'utf8')

  return fileContents
}
