import {
  siNextdotjs,
  siTypescript,
  siReact,
  siMui,
  siRadixui,
  siFirebase,
  siStorybook,
  siDocker,
  siSwagger,
  siEslint,
  siPrettier,
  siStylelint,
  siZod,
  siReacthookform,
  siMermaid,
  siSwr,
  siAxios,
  siTailwindcss,
} from 'simple-icons';

type TechIconProps = {
  name: string;
  size?: number;
};

export const TechIcon = ({ name, size = 16 }: TechIconProps) => {
  const iconMap: Record<string, { path: string; hex: string }> = {
    nextjs: { path: siNextdotjs.path, hex: siNextdotjs.hex },
    typescript: { path: siTypescript.path, hex: siTypescript.hex },
    react: { path: siReact.path, hex: siReact.hex },
    mui: { path: siMui.path, hex: siMui.hex },
    radixui: { path: siRadixui.path, hex: siRadixui.hex },
    firebase: { path: siFirebase.path, hex: siFirebase.hex },
    storybook: { path: siStorybook.path, hex: siStorybook.hex },
    docker: { path: siDocker.path, hex: siDocker.hex },
    swagger: { path: siSwagger.path, hex: siSwagger.hex },
    eslint: { path: siEslint.path, hex: siEslint.hex },
    prettier: { path: siPrettier.path, hex: siPrettier.hex },
    stylelint: { path: siStylelint.path, hex: siStylelint.hex },
    zod: { path: siZod.path, hex: siZod.hex },
    reacthookform: { path: siReacthookform.path, hex: siReacthookform.hex },
    mermaid: { path: siMermaid.path, hex: siMermaid.hex },
    swr: { path: siSwr.path, hex: siSwr.hex },
    axios: { path: siAxios.path, hex: siAxios.hex },
    tailwindcss: { path: siTailwindcss.path, hex: siTailwindcss.hex },
  };

  const icon = iconMap[name.toLowerCase()];

  if (!icon) {
    return null;
  }

  return (
    <svg
      role='img'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      className='tech_icon'
    >
      <path d={icon.path} fill={`#${icon.hex}`} />
    </svg>
  );
};

export default TechIcon;
