import { prisma } from './src/lib/prisma';

async function main() {
  try {
    // 1. Seed Categories
    const categoryCount = await prisma.category_83.count();
    if (categoryCount === 0) {
      await prisma.category_83.createMany({
        data: [
          { cid: 1, cname: 'hats', size: '', image_url: '/w11-p1-1.png' },
          { cid: 2, cname: 'jackets', size: '', image_url: '/w11-p1-2.png' },
          { cid: 3, cname: 'sneakers', size: '', image_url: '/w11-p1-3.png' },
          { cid: 4, cname: 'womens', size: 'large', image_url: '/w11-p1-4.png' },
          { cid: 5, cname: 'mens', size: 'large', image_url: '/w11-p1-5.png' },
        ],
      });
      console.log('Categories seeded.');
    }

    // 2. Seed Products (Shop_83)
    const productCount = await prisma.shop_83.count();
    if (productCount === 0) {
      await prisma.shop_83.createMany({
        data: [
          { pname: 'Brown Hats', cat_id: 1, price: 25, img_url: '/w11-p2-1.png' },
          { pname: 'Blue Jackets', cat_id: 2, price: 90, img_url: '/w11-p2-2.png' },
          { pname: 'White Sneakers', cat_id: 3, price: 110, img_url: '/w11-p2-3.png' },
          { pname: 'Red Dress', cat_id: 4, price: 150, img_url: '/w11-p1-4.png' },
          { pname: 'Black Suit', cat_id: 5, price: 200, img_url: '/w11-p1-5.png' },
        ],
      });
      console.log('Products seeded.');
    }

    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
