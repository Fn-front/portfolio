import { PrismaClient } from '@prisma/client'

// インスタンスを生成
const prisma = new PrismaClient()

async function main() {
  console.log('Seeding data...');

  const user1 = await prisma.todo.create({
    data: {
      id: 1,
      title: 'ダミーテキスト１',
      date: '2024-08-11',
      done: false
    },
  });

  console.log('Data seeding complete.');
}

main()
  .catch(err => {
    console.error('Error seeding data:', err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });