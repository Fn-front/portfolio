import TechIcon from '@/components/Icons/TechIcon';

type TechBadgeProps = {
  name: string;
  iconName?: string;
};

export const TechBadge = ({ name, iconName }: TechBadgeProps) => {
  return (
    <span className="tech_badge">
      {iconName && <TechIcon name={iconName} size={16} />}
      <span className="tech_badge_text">{name}</span>
    </span>
  );
};

export default TechBadge;
