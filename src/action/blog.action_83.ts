'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import blogData from '@/app/_assets/data/blogData.json';

export const fetchBlogsLocal = async () => {
  return blogData;
};

export const fetchBlogsDb = async () => {
  try {
    const blogs = await prisma.blog.findMany();
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs from DB:', error);
    return [];
  }
};

export const createBlog = async (formData: FormData) => {
  const title = formData.get('title') as string;
  const descrip = formData.get('descrip') as string;
  const category = formData.get('category') as string;
  const img = formData.get('img') as string;

  try {
    await prisma.blog.create({
      data: { title, descrip, category, img },
    });
    revalidatePath('/blog_db_83');
  } catch (error) {
    console.error('Error creating blog:', error);
  }
};

export const removeBlog = async (id: string) => {
  try {
    await prisma.blog.delete({ where: { id } });
    revalidatePath('/blog_db_83');
  } catch (error) {
    console.error('Error removing blog:', error);
  }
};
