import { prisma } from './src/lib/prisma';

async function main() {
  try {
    const categories = await prisma.category_83.findMany();
    console.log('Categories:', categories);

    const products = await prisma.shop_83.findMany();
    console.log('Products count:', products.length);
    if (products.length > 0) {
      console.log('Sample product:', products[0]);
    }
  } catch (error) {
    console.error('Error checking DB:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
