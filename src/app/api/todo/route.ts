import { PrismaClient } from "@prisma/client";

// インスタンスを生成
const prisma = new PrismaClient();

// データベースに接続する関数
export async function CONNECT() {
  try {
    //prismaでデータベースに接続
    prisma.$connect();
  } catch (error) {
    return Error("DB接続に失敗しました");
  }
};
