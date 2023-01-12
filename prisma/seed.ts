/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';
import { accountGroups } from './accountGroups';
const prisma = new PrismaClient();
async function main() {
  const accountTypes = await prisma.rootAccType.createMany({
    data: [
      { rType: 'Assets' },
      { rType: 'Liabilities' },
      { rType: 'Revenues' },
      { rType: 'Equity' },
      { rType: 'Expenses' },
    ],
    skipDuplicates: true,
  });
  console.log(accountTypes);

  for (const group of accountGroups) {
    await prisma.accountGroup.create({
      data: {
        name: group.name,
        rootType: { connect: { rType: group.type } },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
