import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma/Prisma';

// ユーザー新規登録
export const POST = async (req: Request) => {
  try {
    const { name, email, password, role } = await req.json();

    const existingUser = await prisma.user.findUnique({ where: { email } });

    // 既存のユーザーかどうか確認
    if (existingUser) {
      return NextResponse.json(
        { message: '入力されたEmailはすでに存在しています' },
        { status: 422 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    // ユーザー登録prisma
    const user = await prisma.user.create({
      data: {
        name,
        email,
        emailVerified: new Date(),
        password: hashedPassword,
        image: '',
        role: role,
      },
    });

    return NextResponse.json({ user }, { status: 201 });

    /* eslint-disable */
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
