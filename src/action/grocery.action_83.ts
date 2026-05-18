'use server'
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

// 抓取
export const fetchGroceries = async () => {
    try {
        return await prisma.grocery.findMany();
    } catch (error) {
        console.error(error);
        return [];
    }
};

// 新增
export const createGrocery = async (formData: FormData) => {
    const name = formData.get('name') as string;
    if (!name) return;
    try {
        await prisma.grocery.create({
            data: { name, completed: false }
        });
        revalidatePath('/grocery_db_83');
    } catch (error) {
        console.error(error);
    }
};

// 刪除
export const removeGrocery = async (id: string) => {
    try {
        await prisma.grocery.delete({ where: { id } });
        revalidatePath('/grocery_db_83');
    } catch (error) {
        console.error(error);
    }
};

// 狀態修改 (名稱改回 editGrocery 以對應你的前端)
export const editGrocery = async (id: string, completed: boolean) => {
    try {
        await prisma.grocery.update({
            where: { id },
            data: { completed }
        });
        revalidatePath('/grocery_db_83');
    } catch (error) {
        console.error(error);
    }
};