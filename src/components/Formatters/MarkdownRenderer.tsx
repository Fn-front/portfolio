import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import TechIcon from '@/components/Icons/TechIcon';
import AchievementStats from '@/components/Ui/AchievementStats/AchievementStats';

type Props = {
  content: string;
};

const techKeywords: Record<string, string> = {
  'Next.js': 'nextjs',
  TypeScript: 'typescript',
  React: 'react',
  MUI: 'mui',
  Firebase: 'firebase',
  Storybook: 'storybook',
  Docker: 'docker',
  Swagger: 'swagger',
  ESLint: 'eslint',
  Prettier: 'prettier',
};

export const MarkdownRenderer = (props: Props) => {
  const { content } = props;

  // [ACHIEVEMENT_STATS]マーカーを検出してコンポーネントに置き換え
  const processedContent = content.replace(
    '[ACHIEVEMENT_STATS]',
    '<achievement-stats></achievement-stats>',
  );

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ node, ...props }) => (
          <a {...props} target='_blank' rel='noopener noreferrer' />
        ),
        li: ({ node, children, ...props }) => {
          const text = String(children);
          let iconName: string | null = null;

          // テキストから技術名を検索してアイコン名を取得
          for (const [keyword, icon] of Object.entries(techKeywords)) {
            if (text.includes(keyword)) {
              iconName = icon;
              break;
            }
          }

          return (
            <li {...props} className={iconName ? 'has_icon' : ''}>
              {iconName && <TechIcon name={iconName} size={16} />}
              {children}
            </li>
          );
        },
        p: ({ node, children, ...props }) => {
          // <achievement-stats>を検出
          const text = String(children);
          if (text.includes('achievement-stats')) {
            return <AchievementStats />;
          }
          return <p {...props}>{children}</p>;
        },
      }}
    >
      {processedContent}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
