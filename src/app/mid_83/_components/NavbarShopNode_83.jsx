import Wrapper from '../_assets/wrappers/Shop_83';
import Link from 'next/link';
import Image from 'next/image';

const NavbarShopNode_83 = () => {
  return (
    <Wrapper>
      <div className='header'>
        <Link href='/mid_83' className='logo-container'>
          <Image src='/images/midterm/assets/crown.svg' alt='Crown Logo' width={50} height={50} />
        </Link>
        <div className='options'>
          <Link href='/' className='option'>
            TKUdemo
          </Link>
          <Link href='/mid_83' className='option'>
            Shop
          </Link>
          <Link href='/mid_83/contact' className='option'>
            Contact
          </Link>
          <Link href='/store_83' className='option'>
            Sign In
          </Link>
          <div className='cart-icon'>
            <Image
              className='shopping-icon'
              src='/images/midterm/assets/shopping-bag.svg'
              alt='Shopping Bag'
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default NavbarShopNode_83;
