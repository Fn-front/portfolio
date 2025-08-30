import { Achievement } from '@/functions/types/achievement';
import { SKILL_TAGS } from '@/functions/constants/skillTags';

export const articles: Achievement[] = [
  {
    id: '1',
    title: '自社SaaSサービス開発',
    content: 'これは最初の記事の内容です。',
    thumbnail: 'no_image_yoko.jpg',
    imagePath: [],
    tags: [SKILL_TAGS.TECHNICAL.REACT, SKILL_TAGS.TECHNICAL.NEXT_JS, SKILL_TAGS.TECHNICAL.TYPESCRIPT, SKILL_TAGS.TECHNICAL.LARAVEL]
  },
  {
    id: '2',
    title: '生成AI活用システム開発',
    content: 'これは最初の記事の内容です。',
    thumbnail: 'no_image_yoko.jpg',
    imagePath: [],
    tags: [SKILL_TAGS.TECHNICAL.PYTHON, SKILL_TAGS.TECHNICAL.REACT, SKILL_TAGS.TECHNICAL.TYPESCRIPT, SKILL_TAGS.TECHNICAL.NEXT_JS]
  },
  {
    id: '3',
    title: '補助金申請システム開発',
    content: 'これは2番目の記事の内容です。',
    thumbnail: 'no_image_yoko.jpg',
    imagePath: [],
    tags: [SKILL_TAGS.TECHNICAL.LARAVEL, SKILL_TAGS.TECHNICAL.JAVASCRIPT, SKILL_TAGS.TECHNICAL.CSS_SASS]
  }
];