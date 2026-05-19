import Wrapper from '../_assets/wrappers/Shop_xx';
import Link from 'next/link';

const NavbarShopNode_xx = () => {
  return (
    <Wrapper>
      <div className='header'>
        <Link href='/mid_xx' className='logo-container'>
          <img src='/images/midterm/assets/crown.svg' />
        </Link>
        <div className='options'>
          <Link href='/' className='option'>
            TKUdemo
          </Link>
          <Link href='/mid_xx' className='option'>
            Shop
          </Link>
          <Link href='/mid_xx/contact' className='option'>
            Contact
          </Link>
          <Link href='/store_xx' className='option'>
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
export default NavbarShopNode_xx;
