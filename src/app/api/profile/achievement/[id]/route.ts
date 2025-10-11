import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';
import matter from 'gray-matter';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const id = params.id;

    if (!id || !/^\d+$/.test(id)) {
      return NextResponse.json({ error: '無効なIDです' }, { status: 400 });
    }

    const filePath = path.join(
      process.cwd(),
      'src',
      'content',
      'achievements',
      `${id}.md`,
    );

    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return NextResponse.json({
      id,
      title: data.title || '',
      date: data.date || '',
      content,
    });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return NextResponse.json(
        { error: '記事が見つかりません' },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { error: `記事を取得できませんでした: ${error}` },
      { status: 500 },
    );
  }
}
