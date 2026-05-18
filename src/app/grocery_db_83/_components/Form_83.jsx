import { createGrocery } from '@/action/grocery.action_83';

const Form_83 = () => {
  return (
    <form action={createGrocery}>
      <h4 className='text-2xl font-semibold mb-4 text-center'>Grocery Bud</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          name='name'
          placeholder='e.g. eggs'
        />
        <button type='submit' className='btn' style={{ background: '#06b6d4' }}>
          Add Item
        </button>
      </div>
    </form>
  );
};
export default Form_83;
