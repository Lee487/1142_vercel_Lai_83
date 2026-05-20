import Wrapper from '../_assets/wrappers/Shop_83';
import Link from 'next/link';

const NavbarShopNode_83 = () => {
  return (
    <Wrapper>
      <div className='header'>
        <Link href='/mid_83' className='logo-container'>
          <img src='/images/midterm/assets/crown.svg' />
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
            <img
              className='shopping-icon'
              src='/images/midterm/assets/shopping-bag.svg'
              alt=''
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default NavbarShopNode_83;
