export type Achievement = {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  imagePath: string[];
  tags: string[];
};

export type AchievementDetailProps = {
  id: string;
};
