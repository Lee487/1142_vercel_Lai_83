import Form_83 from './_components/Form_83';
import Items_83 from './_components/Items_83';
import { ToastContainer } from 'react-toastify';
import Wrapper from '../_assets/wrapper/Grocery_xx';
import { fetchGroceries } from '@/action/grocery.action_83';

const GroceryDbPage_83 = async () => {
  const items = await fetchGroceries();

  return (
    <Wrapper>
      <ToastContainer position='top-center' />
      <section className='section-center'>
        <Form_83 />
        <Items_83 items={items} />
      </section>
    </Wrapper>
  );
};

export default GroceryDbPage_83;
