import { NextResponse } from 'next/server';
import { articles } from '@/lib/data/articles';

const formatImagePath = (imagePath: string[]): string => {
  return imagePath.length > 0
    ? imagePath.map((path) => `${path}`).join('/') + '/'
    : '';
};

// 全記事を取得するAPI
export async function GET() {
  try {
    const achievementsWithAbsolutePaths = articles.map((achievement) => ({
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
