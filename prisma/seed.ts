/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';
import { accountGroups } from './accountGroups';
import { chartOfAccounts } from './chartOfAccounts';
const prisma = new PrismaClient();
async function main() {
  const accountTypes = await prisma.rootAccType.createMany({
    data: [
      { id: 1, name: 'Assets' },
      { id: 2, name: 'Liabilities' },
      { id: 3, name: 'Equity' },
      { id: 4, name: 'Revenue' },
      { id: 5, name: 'Expenses' },
    ],
    skipDuplicates: true,
  });
  console.log(accountTypes);
  for (const group of accountGroups) {
    await prisma.accountGroup.create({
      data: {
        name: group.name,
        rootType: { connect: { id: group.rootId } },
      },
    });
  }
  const chartAccounts = await prisma.chartOfAccounts.createMany({
    data: chartOfAccounts,
    skipDuplicates: true,
  });
  console.log(chartAccounts);
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
