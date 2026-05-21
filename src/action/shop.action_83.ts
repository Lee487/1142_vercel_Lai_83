'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const fetchCategory_83 = async () => {
  const categories = await prisma.category_83.findMany();
  return categories;
};

export const deleteProduct_83 = async (formData: FormData) => {
  const id = Number(formData.get('id'));

  if (isNaN(id)) {
    throw new Error('Invalid product ID');
  }

  await prisma.shop_83.deleteMany({
    where: { pid: id },
  });

  revalidatePath('/mid_83', 'layout');
};
