'use client';

import Link from 'next/link';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { ModeToggle } from './ModeToggle';

const Navbar_83 = () => {
  return (
<<<<<<< HEAD
    <div className='flex items-center justify-around mx-auto py-4 bg-amber-100 dark:bg-gray-700'>
      <Link href='/'>
        <div className='text-[18px]'>TKUdemo_83</div>
      </Link>

      <Menubar className='w-72'>
        <MenubarMenu>
          <MenubarTrigger>Demo</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href='/counter_83'>Counter_83</Link>
            </MenubarItem>
            <MenubarItem>
              <Link href='/tours_83'>Tours_83</Link>
            </MenubarItem>
            <MenubarItem>
              <Link href='/users_db_83'>Users_db_83</Link>
            </MenubarItem>
            <MenubarItem>
              <Link href='/grocery_83'>Grocery_83</Link>
            </MenubarItem>
            <MenubarItem>
              <Link href='/grocery_db_83'>Grocery_db_83</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Quiz1</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href='/blog_83'>Quiz1: blog_83</Link>
            </MenubarItem>
            <MenubarItem>
              <Link href='/blog_db_83'>Quiz1: blog_db_83</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Midterm</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Quiz2</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Final</MenubarTrigger>
        </MenubarMenu>
      </Menubar>

      <div>
        <ModeToggle />
      </div>
    </div>
=======
    <nav className='max-w-3xl flex gap-x-4 mx-auto py-4'>
    <Link href ='/'>Home</Link>
    <Link href ='/counter_83'>Counter_83</Link>
    <Link href ='/tours_83'>Tours_83</Link>
    <Link href ='/actions_83'>Actions_83</Link>
    <Link href ='/users_db_83'>Users_db_83</Link>
    <Link href ='/grocery_83'>Grocery_83</Link>
    <Link href ='/grocery_db_83'>Grocery_db_83</Link>
    <Link href ='/mid_xx'>Mid_xx</Link>
    <Link href ='/store_xx'>Store_xx</Link>

    </nav>
>>>>>>> 50d49ef (1234)
  );
};

export default Navbar_83;
