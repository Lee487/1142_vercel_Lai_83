'use server'

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const fetchUsers = async () => {
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error) {
        console.error('Build 期間資料庫連線跳過或失敗:', error);
        return []; 
    }
};

export const createUser = async (formData: FormData) => {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    try {
        await prisma.user.create({
            data: { name, email },
        });
        revalidatePath('/users_db_83');
    } catch (error) {
        console.error('Error creating user:', error);
    }
};

// 補上 Form2_83 需要的 createUser2
export const createUser2 = async (prevState: string | null, formData: FormData) => {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    try {
        await prisma.user.create({
            data: { name, email },
        });
        revalidatePath('/users_db_83');
        return 'user created successfully';
    } catch (error) {
        console.error('Error creating user:', error);
        return 'Error creating user...';
    }
};

export const removeUser = async (id: number) => {
    try {
        await prisma.user.delete({ where: { id } });
        revalidatePath('/users_db_83');
    } catch (error) {
        console.error('Error removing user:', error);
    }
};