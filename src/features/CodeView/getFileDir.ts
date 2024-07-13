// @ts-ignore
import recursiveReaddir from "recursive-readdir"

export const getFileDir = async(dir: string) => {
  const files = await recursiveReaddir(dir)

  return files
  
  // const pathnames = files
  //   .map((file: string) => {
  //     const pathname = file
  //       .replace("src/pages/", "")
  //       .replace(/.[jt]sx?$/, "")
  //     return pathname
  //   })
  //   .filter((file: string) => !/^_.+/.test(file))
  //   .filter((file: string) => file !== "index")
}