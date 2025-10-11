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
  siPrettier
} from 'simple-icons';

type TechIconProps = {
  name: string;
  size?: number;
};

export const TechIcon = ({ name, size = 16 }: TechIconProps) => {
  const iconMap: Record<string, { path: string; hex: string }> = {
    'nextjs': { path: siNextdotjs.path, hex: siNextdotjs.hex },
    'typescript': { path: siTypescript.path, hex: siTypescript.hex },
    'react': { path: siReact.path, hex: siReact.hex },
    'mui': { path: siMui.path, hex: siMui.hex },
    'radixui': { path: siRadixui.path, hex: siRadixui.hex },
    'firebase': { path: siFirebase.path, hex: siFirebase.hex },
    'storybook': { path: siStorybook.path, hex: siStorybook.hex },
    'docker': { path: siDocker.path, hex: siDocker.hex },
    'swagger': { path: siSwagger.path, hex: siSwagger.hex },
    'eslint': { path: siEslint.path, hex: siEslint.hex },
    'prettier': { path: siPrettier.path, hex: siPrettier.hex },
  };

  const icon = iconMap[name.toLowerCase()];

  if (!icon) {
    return null;
  }

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className="tech_icon"
    >
      <path d={icon.path} fill={`#${icon.hex}`} />
    </svg>
  );
};

export default TechIcon;
