import type { Metadata } from 'next';
import { Geist, Geist_Mono } from "next/font/google";
import Navbar_xx from './_components/NavbarShopNode_xx';
import StyledComponentsRegistry from '@/lib/registry';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Next.js Introduction',
  description: 'Given for basic understanding of Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar_xx />
        <StyledComponentsRegistry>
          <main className='max-w-3xl mx-auto py-4'>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
