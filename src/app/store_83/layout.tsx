'use client';

import { ClerkProvider, SignInButton, SignUpButton, UserButton, Show } from '@clerk/nextjs'
import '../globals.css';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}>
          <header className='flex justify-end items-center p-4 gap-4 h-16'>
            <Show when='signed-out'>
              <SignInButton />
              <SignUpButton>
                <button className='bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer'>
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when='signed-in'>
              <UserButton />
            </Show>
          </header>
          <div className='p-8'>
            <div className='section-title text-center mb-8'>
               <h4> Lai, 213410383 </h4>
            </div>
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
