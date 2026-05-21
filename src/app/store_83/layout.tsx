'use client';

import { ClerkProvider, SignInButton, SignUpButton, UserButton, Show } from '@clerk/nextjs'
import Link from 'next/link';
import '../globals.css';

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
        <div className="antialiased bg-white text-black min-h-screen">
          <header className='flex justify-between items-center p-4 gap-4 h-16 border-b'>
            <Link href='/' className='font-bold text-xl'>
              TKUdemo_83
            </Link>
            <div className='flex items-center gap-4'>
              <Show when='signed-out'>
                <SignInButton mode='modal'>
                  <button className="cursor-pointer">Sign in</button>
                </SignInButton>
                <SignUpButton mode='modal'>
                  <button className='bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer'>
                    Sign Up
                  </button>
                </SignUpButton>
              </Show>
              <Show when='signed-in'>
                <UserButton />
              </Show>
            </div>
          </header>
          <div className='p-8'>
            <div className='section-title text-center mb-8'>
               <h4> Lai, 213410383 </h4>
            </div>
            {children}
          </div>
        </div>
    </ClerkProvider>
  )
}
