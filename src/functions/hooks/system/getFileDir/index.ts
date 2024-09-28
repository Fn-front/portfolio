/* eslint-disable */
// @ts-ignore
// import recursiveReaddir from 'recursive-readdir';
const fs = require('fs');
const path = require('path');

export const getFileDir = async (dir: string) => {
  // const files = await recursiveReaddir(dir);
  const readdirRecursively = (dir: string, files = []) => {
    const dirents = fs.readdirSync(path.resolve(dir), { withFileTypes: true });
    const dirs = [];
    for (const dirent of dirents) {
      if (dirent.isDirectory()) dirs.push(`${dir}/${dirent.name}`);
      /// @ts-ignore
      if (dirent.isFile()) files.push(`${dir}/${dirent.name}`);
    }
    for (const d of dirs) {
      files = readdirRecursively(d, files);
    }
    return files;
  };

  // let pathnames = ['aaa'];
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

  return readdirRecursively(dir);
};
