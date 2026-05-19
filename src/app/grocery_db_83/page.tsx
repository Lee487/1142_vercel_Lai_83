<<<<<<< HEAD
import Form_83 from './_components/Form_83';
import Items_83 from './_components/Items_83';
=======
import Form_83 from './_components/Form_xx';
import Items_83 from './_components/Items_xx';
>>>>>>> 50d49ef (1234)
import { ToastContainer } from 'react-toastify';
import Wrapper from '../_assets/wrapper/Grocery_xx';
import { fetchGroceries } from '@/action/grocery.action_83';

<<<<<<< HEAD
const GroceryDbPage_83 = async () => {
=======
// 加上 async
const GroceryPage_xx = async () => {
  // 在這裡抓資料
>>>>>>> 50d49ef (1234)
  const items = await fetchGroceries();

  return (
    <Wrapper>
      <ToastContainer position='top-center' />
      <section className='section-center'>
        <Form_83 />
<<<<<<< HEAD
=======
        {/* 把資料傳下去 */}
>>>>>>> 50d49ef (1234)
        <Items_83 items={items} />
      </section>
    </Wrapper>
  );
};

<<<<<<< HEAD
export default GroceryDbPage_83;
=======
export default GroceryPage_xx;
>>>>>>> 50d49ef (1234)
