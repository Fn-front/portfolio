/* eslint-disable */
// @ts-ignore
import recursiveReaddir from 'recursive-readdir';

export const getFileDir = (dir: string) => {
  const files = recursiveReaddir(dir);
  const pathnames = files;
  // if (files) {
  //   const deleteDir = 'src/app/';
  //   pathnames = files.map((file: string) => {
  //     const pathname = file
  //       .replace(deleteDir, '')
  //       .replace(/.[jt]sx?$/, '')
  //       .replace('page', '');
  //     return pathname;
  //   });
  //   // .filter((file: string) => !/^_.+/.test(file))
  //   // .filter((file: string) => file !== "index")
  // }

  return pathnames;
};
