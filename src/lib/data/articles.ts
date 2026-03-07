import { Achievement } from '@/functions/types/achievement';
import { SKILL_TAGS } from '@/functions/constants/skillTags';

export const articles: Achievement[] = [
  {
    id: '1',
    title: '自社SaaS フロントエンドリアーキテクチャ',
    content:
      '自社SaaSプロダクトの開発において、フロントエンドリードとして7ヶ月間参画。フロントエンド開発を単独で担当し、新規機能開発からフロントリポジトリ全体のリアーキテクチャまで幅広く対応。',
    thumbnail: 'no_image_yoko.jpg',
    imagePath: [],
    tags: [
      SKILL_TAGS.TECHNICAL.REACT,
      SKILL_TAGS.TECHNICAL.NEXT_JS,
      SKILL_TAGS.TECHNICAL.TYPESCRIPT,
      SKILL_TAGS.OTHERS_LIBRARY.MATERIAL_UI,
      SKILL_TAGS.OTHERS_LIBRARY.RADIX_UI,
      SKILL_TAGS.OTHERS_LIBRARY.DOCKER,
      SKILL_TAGS.OTHERS_LIBRARY.STORYBOOK,
      SKILL_TAGS.OTHERS_LIBRARY.ESLINT,
      SKILL_TAGS.OTHERS_LIBRARY.PRETTIER,
      SKILL_TAGS.OTHERS_LIBRARY.STYLELINT,
    ],
  },
  {
    id: '2',
    title: '生成AI活用システム開発',
    content:
      '生成AI（GPT-4）を活用した業務システム開発プロジェクト。PDFドキュメントのアップロード・分析、AIチャット機能を提供するクライアント向けWebアプリケーション。想定ユーザー数18,000名規模の大規模システムとして、プロジェクト立ち上げから要件定義・設計・開発までを一貫して担当。',
    thumbnail: 'no_image_yoko.jpg',
    imagePath: [],
    tags: [
      SKILL_TAGS.TECHNICAL.NEXT_JS,
      SKILL_TAGS.TECHNICAL.TYPESCRIPT,
      SKILL_TAGS.TECHNICAL.REACT,
      SKILL_TAGS.TECHNICAL.PYTHON,
      SKILL_TAGS.OTHERS_LIBRARY.RADIX_UI,
      SKILL_TAGS.OTHERS_LIBRARY.REACT_HOOK_FORM,
      SKILL_TAGS.OTHERS_LIBRARY.TAILWIND_CSS,
      SKILL_TAGS.OTHERS_LIBRARY.DOCKER,
      SKILL_TAGS.OTHERS_LIBRARY.ESLINT,
      SKILL_TAGS.OTHERS_LIBRARY.PRETTIER,
      SKILL_TAGS.OTHERS_LIBRARY.STYLELINT,
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
