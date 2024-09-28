import { route } from '@/functions/routes';

export const getFileDir = async (dir: string) => {
  const routes = route();

  const path = routes.filter((i) => i.path.match(dir));
  const paths = path.map((a) => a.path);

  return paths;
};
