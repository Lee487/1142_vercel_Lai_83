import Form_83 from './_components/Form_83';
import Items_83 from './_components/Items_83';
import { ToastContainer } from 'react-toastify';
import Wrapper from '../../_assets/wrapper/Grocery_83';
import { fetchGroceries } from '@/action/grocery.action_83';

// 加上 async
const GroceryPage_83 = async () => {
  // 在這裡抓資料
  const items = await fetchGroceries();

  return (
    <Wrapper>
      <ToastContainer position='top-center' />
      <section className='section-center'>
        <Form_83 />
        {/* 把資料傳下去 */}
        <Items_83 items={items} />
      </section>
    </Wrapper>
  );
};

export default GroceryPage_83;
