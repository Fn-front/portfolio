'use server';

import path from 'path';
import { promises as fs } from 'fs';

export async function getAchievementDetail(id: string): Promise<{
  content?: string;
  title?: string;
  date?: string;
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

    // フロントマターを抽出
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
    const match = fileContent.match(frontmatterRegex);

    let title = '';
    let date = '';

    if (match && match[1]) {
      const frontmatter = match[1];
      const titleMatch = frontmatter.match(/title:\s*['"](.+?)['"]/);
      const dateMatch = frontmatter.match(/date:\s*['"](.+?)['"]/);

      if (titleMatch) title = titleMatch[1];
      if (dateMatch) date = dateMatch[1];
    }

    const content = fileContent.replace(frontmatterRegex, '').trim();

    return { content, title, date };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return { error: '記事が見つかりません' };
    }

    return { error: '記事を取得できませんでした' };
  }
}