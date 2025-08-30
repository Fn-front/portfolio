'use server';

import path from 'path';
import { promises as fs } from 'fs';

export async function getAchievementDetail(id: string): Promise<{ content?: string; error?: string }> {
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

    const content = await fs.readFile(filePath, 'utf8');

    return { content };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return { error: '記事が見つかりません' };
    }

    return { error: '記事を取得できませんでした' };
  }
}