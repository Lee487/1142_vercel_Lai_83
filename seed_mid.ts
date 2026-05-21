import { prisma } from './src/lib/prisma';

async function main() {
  try {
    // Clear existing data to avoid duplicates if needed, 
    // or just use createMany if the table is empty.
    const count = await prisma.category_83.count();
    if (count > 0) {
      console.log('Category_83 table already has data. Skipping seed.');
      return;
    }

    await prisma.category_83.createMany({
      data: [
        { cname: 'hats', size: '', image_url: '/w11-p1-1.png' },
        { cname: 'jackets', size: '', image_url: '/w11-p1-2.png' },
        { cname: 'sneakers', size: '', image_url: '/w11-p1-3.png' },
        { cname: 'womens', size: 'large', image_url: '/w11-p1-4.png' },
        { cname: 'mens', size: 'large', image_url: '/w11-p1-5.png' },
      ],
    });
    console.log('Seed data for Category_83 added successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
