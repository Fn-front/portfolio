import { NextResponse } from 'next/server';
import prisma from '@/lib/Prisma';

// データベースからデータを取得する
export const GET = async () => {
  try {
    // await connect();
    const data = await prisma.todo.findMany({
      orderBy: {
        id: 'asc',
      },
    });

    return NextResponse.json({ data }, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'Error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

// データベースにデータを追加する
export const POST = async (req: Request) => {
  const { id, title, date, done } = await req.json();
  try {
    await prisma.todo.create({
      data: {
        id: id,
        title: title,
        date: date,
        done: done,
      },
    });

    return NextResponse.json(
      { message: '追加が完了しました' },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { message: '追加に失敗しました' },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
};

// 選択したデータをデータベースから削除する
export const DELETE = async (req: Request) => {
  const { ids } = await req.json();

  try {
    await prisma.todo.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    return NextResponse.json(
      { message: '削除が完了しました' },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { message: '削除に失敗しました' },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
};

// データベースの情報を変更する
export const PUT = async (req: Request) => {
  const { id, title, date, done } = await req.json();

  try {
    await prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        id: id,
        title: title,
        date: date,
        done: done,
      },
    });

    return NextResponse.json(
      { message: '変更が完了しました' },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { message: '変更に失敗しました' },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
};
