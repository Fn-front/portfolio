import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';
import { Achievement } from '@/functions/types/achievement';

const formatImagePath = (imagePath: string[]): string => {
  return imagePath.length > 0
    ? imagePath.map((path) => `${path}`).join('/') + '/'
    : '';
};

// 全記事を取得するAPI
export async function GET() {
  try {
    const jsonDirectory = path.join(process.cwd(), 'src', 'lib', 'data');
    const fileContents = await fs.readFile(
      jsonDirectory + '/articles.json',
      'utf8',
    );

    const achievements: Achievement[] = JSON.parse(fileContents);

    const achievementsWithAbsolutePaths = achievements.map((achievement) => ({
      ...achievement,
      thumbnail: `/assets/img/${formatImagePath(achievement.imagePath)}${achievement.thumbnail}`,
      imagePath: formatImagePath(achievement.imagePath),
    }));

    return NextResponse.json(achievementsWithAbsolutePaths);
  } catch (error) {
    return NextResponse.json(
      { error: `記事を取得できませんでした ${error}` },
      { status: 500 },
    );
  }
}
