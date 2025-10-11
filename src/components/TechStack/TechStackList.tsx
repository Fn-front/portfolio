'use client';

import TechBadge from './TechBadge';

const techStack = [
  { name: 'Next.js 14 (App Router)', icon: 'nextjs' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'React 18', icon: 'react' },
  { name: 'MUI / Radix UI', icon: 'mui' },
  { name: 'Firebase / Firebase Admin', icon: 'firebase' },
  { name: 'React Hook Form / Zod', icon: 'react' },
  { name: 'React Markdown / Mermaid', icon: 'react' },
  { name: 'Recharts / Cytoscape' },
  { name: 'Storybook', icon: 'storybook' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Swagger', icon: 'swagger' },
  { name: 'ESLint / Prettier / Stylelint', icon: 'eslint' },
  { name: 'knip' },
];

export const TechStackList = () => {
  return (
    <div className="tech_stack_list">
      {techStack.map((tech, index) => (
        <TechBadge key={index} name={tech.name} iconName={tech.icon} />
      ))}
    </div>
  );
};

export default TechStackList;
