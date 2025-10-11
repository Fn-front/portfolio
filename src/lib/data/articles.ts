import { Achievement } from '@/functions/types/achievement';
import { SKILL_TAGS } from '@/functions/constants/skillTags';

export const articles: Achievement[] = [
  {
    id: '1',
    title: '自社SaaS フロントエンドリアーキテクチャ',
    content: '自社SaaSプロダクトの開発において、フロントエンドリードとして7ヶ月間参画。フロントエンド開発を単独で担当し、新規機能開発からフロントリポジトリ全体のリアーキテクチャまで幅広く対応。',
    thumbnail: 'no_image_yoko.jpg',
    imagePath: [],
    tags: [
      SKILL_TAGS.TECHNICAL.REACT,
      SKILL_TAGS.TECHNICAL.NEXT_JS,
      SKILL_TAGS.TECHNICAL.TYPESCRIPT,
      SKILL_TAGS.OTHERS_LIBRARY.MATERIAL_UI,
      SKILL_TAGS.OTHERS_LIBRARY.RADIX_UI,
      SKILL_TAGS.OTHERS_LIBRARY.STORYBOOK,
      SKILL_TAGS.OTHERS_LIBRARY.ESLINT,
      SKILL_TAGS.OTHERS_LIBRARY.PRETTIER,
      SKILL_TAGS.OTHERS_LIBRARY.STYLELINT,
    ],
  },
  {
    id: '2',
    title: '生成AI活用システム開発',
    content: 'これは最初の記事の内容です。',
    thumbnail: 'no_image_yoko.jpg',
    imagePath: [],
    tags: [
      SKILL_TAGS.TECHNICAL.PYTHON,
      SKILL_TAGS.TECHNICAL.REACT,
      SKILL_TAGS.TECHNICAL.TYPESCRIPT,
      SKILL_TAGS.TECHNICAL.NEXT_JS,
    ],
  },
  {
    id: '3',
    title: '補助金申請システム開発',
    content: 'これは2番目の記事の内容です。',
    thumbnail: 'no_image_yoko.jpg',
    imagePath: [],
    tags: [
      SKILL_TAGS.TECHNICAL.LARAVEL,
      SKILL_TAGS.TECHNICAL.JAVASCRIPT,
      SKILL_TAGS.TECHNICAL.CSS_SASS,
    ],
  },
];
