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

    //必ず実行する
    await prisma.$disconnect();
  }
};
