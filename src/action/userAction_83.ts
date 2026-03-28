'use server'

import {prisma} from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const fetchUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
};

export const createUser = async (formData: FormData) => {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const newuser = {name,email,};
    console.log('newuser',newuser);

    try{
        const result = await prisma.user.create({
            data: newuser,
        });
        revalidatePath('/users_db_83');
    } catch (error) {
        console.error('Error creating user:', error);
    }
};

export const createUser2 = async (prevState: any,formData: FormData) => {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const newuser = {name,email,};
    console.log('newuser',newuser);

    try{
        const result = await prisma.user.create({
            data: newuser,
        });
        revalidatePath('/users_db_83');
        return 'user created successfully';
    } catch (error) {
        console.error('Error creating user:', error);
        return 'Error creating user...';
    }
};

export const removeUser = async (id: number,formData: FormData) => {
    console.log('id',id);
    await prisma.user.delete({where: {id,},});
    revalidatePath('/users_db_83');
};  

