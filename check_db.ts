import 'dotenv/config';
import { prisma } from './src/lib/prisma';

async function main() {
  const categories = await prisma.category_83.findMany();
  console.log('Categories in DB:', categories);

  const products = await prisma.shop_83.findMany();
  console.log('Total Products in DB:', products.length);
  
  if (products.length > 0) {
    console.log('Sample Product:', products[0]);
  } else {
    console.log('No products found in Shop_83 table.');
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
