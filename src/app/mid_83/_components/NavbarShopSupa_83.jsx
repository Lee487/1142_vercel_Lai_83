import Wrapper from '../_assets/wrappers/Shop_83';
import Link from 'next/link';
import Image from 'next/image';

const NavbarShopSupa_83 = () => {
  return (
    <Wrapper>
      <div className='header'>
        <Link href='/mid_83/supabase' className='logo-container'>
          <Image src='/images/midterm/assets/crown.svg' alt='Crown Logo' width={50} height={50} />
        </Link>
        <div className='options'>
          <Link href='/' className='option'>
            TKUdemo
          </Link>
          <Link href='./overview.html' className='option'>
            Shop
          </Link>
          <Link href='/shop' className='option'>
            Contact
          </Link>
          <Link href='/signin' className='option'>
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
...

            <div className='cart-items'>
              <div className='cart-item'>
                <img src='/images/midterm/hats/brown-cowboy.png' alt='item' />
                <div className='item-details'>
                  <span className='name'>Brown Cowboy</span>
                  <span className='price'>4 * $35</span>
                </div>
              </div>
              <div className='cart-item'>
                <img
                  src='/images/midterm/jackets/blue-jean-jacket.png'
                  alt='item'
                />
                <div className='item-details'>
                  <span className='name'>Blue Jean Jacket</span>
                  <span className='price'>1 * $90</span>
                </div>
              </div>
            </div>
            <button className='custom-button'>GO TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default NavbarShopSupa_83;
