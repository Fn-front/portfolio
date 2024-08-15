import { NextResponse } from "next/server";
import { prisma } from '@/lib/Prisma'

// データベースに接続する関数
// export const connect = async () => {
//   try {
//     //prismaでデータベースに接続
//     prisma.$connect();
//   } catch (error) {
//     return Error("DB接続に失敗しました");
//   }
// };

// データベースからデータを取得する
export const GET = async (req: Request) => {
  try {
    // await connect();
    const data = await prisma.todo.findMany();

    return NextResponse.json({ data }, { status: 200 });

  } catch (error) {

    return NextResponse.json({ message: "Error" }, { status: 500 });

  } finally {
    await prisma.$disconnect();
  }
};

// データベースにデータを追加する
export const POST = async (req: Request, res: NextResponse) => {
  const { id, title, date, done } = await req.json();
  try {
      await prisma.todo.create({
          data: {
              id: id,
              title: title,
              date: date,
              done: done
          }
      });

      return NextResponse.json({ message: "追加が完了しました"}, { status: 200 })

  } catch (error) {
      return NextResponse.json({ message: "追加に失敗しました" }, { status: 500 })

  } finally {
      await prisma.$disconnect();
  }
}


// データベースにデータを追加する
export const DELETE = async (req: Request, res: NextResponse) => {
  const { ids } = await req.json();
  try {
      await prisma.todo.deleteMany({
          where: {
              id: {
                in: ids
              }
          }
      });

      return NextResponse.json({ message: "削除が完了しました"}, { status: 200 })

  } catch (error) {
      return NextResponse.json({ message: "削除に失敗しました" }, { status: 500 })

  } finally {
      await prisma.$disconnect();
  }
}
