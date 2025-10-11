type StatCardProps = {
  icon: string;
  value: string;
  label: string;
};

export const StatCard = ({ icon, value, label }: StatCardProps) => {
  return (
    <div className="stat_card">
      <div className="stat_card_icon">{icon}</div>
      <div className="stat_card_value">{value}</div>
      <div className="stat_card_label">{label}</div>
    </div>
  );
};

export default StatCard;
