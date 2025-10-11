'use server';

import path from 'path';
import { promises as fs } from 'fs';
import matter from 'gray-matter';

type TechStack = {
  name: string;
  icon?: string;
};

export async function getAchievementDetail(id: string): Promise<{
  content?: string;
  title?: string;
  date?: string;
  techStack?: TechStack[];
  error?: string
}> {
  try {
    if (!id || !/^\d+$/.test(id)) {
      return { error: '無効なIDです' };
    }

    const filePath = path.join(
      process.cwd(),
      'src',
      'content',
      'achievements',
      `${id}.md`
    );

    const fileContent = await fs.readFile(filePath, 'utf8');

    // gray-matterでフロントマターをパース
    const { data, content } = matter(fileContent);

    const title = data.title || '';
    const date = data.date || '';
    const techStack = data.techStack || [];

    return { content, title, date, techStack };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return { error: '記事が見つかりません' };
    }

    return { error: '記事を取得できませんでした' };
  }
}