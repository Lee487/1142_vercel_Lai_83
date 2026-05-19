import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import Navbar_83 from '../../components/Navbar_83';
import { ThemeProvider } from '../../components/ThemeProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TKUdemo_83',
  description: 'A demo app with styled navigation and theme toggling',
};

export default function DemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-100 antialiased`}
      >
        <ThemeProvider>
          <Navbar_83 />
          <main className='max-w-3xl mx-auto py-4'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
