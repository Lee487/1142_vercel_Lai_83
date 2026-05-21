import Navbar_83 from '../../components/Navbar_83';
import { ThemeProvider } from '../../components/ThemeProvider';
import '../globals.css';

export default function DemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-100 antialiased">
        <Navbar_83 />
        <main className='max-w-3xl mx-auto py-4'>{children}</main>
      </div>
    </ThemeProvider>
  );
}
