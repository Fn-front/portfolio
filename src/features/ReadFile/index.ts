import path from 'path';
import fs from 'fs';

export const getFile = async (targetPath: string, targetFile: string) => {
  const configDirectory = path.resolve(process.cwd(), targetPath);
  const filename = path.join(configDirectory, targetFile);
  console.log('ーーーーーーーーーーーー');
  console.log(configDirectory);
  console.log('ーーーーーーーーーーーー');
  const fileContents = fs.readFileSync(filename, 'utf8');

  return fileContents;
};
