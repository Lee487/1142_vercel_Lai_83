import Form_83 from './_components/Form_xx';
import Items_83 from './_components/Items_xx';
import { ToastContainer } from 'react-toastify';
import Wrapper from '../../_assets/wrapper/Grocery_xx';
import { fetchGroceries } from '@/action/grocery.action_83';

// 加上 async
const GroceryPage_xx = async () => {
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

export default GroceryPage_xx;
