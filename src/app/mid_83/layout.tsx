import Navbar_83 from './_components/NavbarShopNode_83';
import StyledComponentsRegistry from '@/lib/registry';
import '../globals.css';

export default function MidtermLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white text-black min-h-screen">
        <StyledComponentsRegistry>
          <Navbar_83 />
          {children}
        </StyledComponentsRegistry>
    </div>
  );
}
