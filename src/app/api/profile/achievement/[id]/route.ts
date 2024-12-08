import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

// データの型定義
interface Achievement {
  id: string;
  title: string;
  content: string;
  imagePath: string;
}

// 特定の記事を取得するAPI
export async function POST(request: Request) {
  try {
    const { id } = await request.json();

    const jsonDirectory = path.join(process.cwd(), 'src', 'lib', 'data');
    const fileContents = await fs.readFile(
      jsonDirectory + '/articles.json',
      'utf8',
    );
    const achievements: Achievement[] = JSON.parse(fileContents);

    const achievement = achievements.find(
      (achievement) => achievement.id === id,
    );

    if (!achievement) {
      return NextResponse.json(
        { error: '記事は存在しません' },
        { status: 404 },
      );
    }

    return NextResponse.json({
      ...achievement,
      imagePath: `/images/${achievement.imagePath}`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: `記事を取得できませんでした ${error}` },
      { status: 500 },
    );
  }
}
