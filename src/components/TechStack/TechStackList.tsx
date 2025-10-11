'use client';

import TechBadge from './TechBadge';

type TechStack = {
  name: string;
  icon?: string;
};

type TechStackListProps = {
  techStack: TechStack[];
};

export const TechStackList = ({ techStack }: TechStackListProps) => {
  return (
    <div className='tech_stack_list'>
      {techStack.map((tech, index) => (
        <TechBadge key={index} name={tech.name} iconName={tech.icon} />
      ))}
    </div>
  );
};

export default TechStackList;
