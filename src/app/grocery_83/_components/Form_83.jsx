import { useState } from 'react';
import { toast } from 'react-toastify';

const Form_83 = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error('please provide value');
      return;
    }
    addItem(newItemName);
    setNewItemName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4 className='text-2xl font-semibold mb-4 text-center'>Grocery Bud</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type='submit' className='btn' style={{ background: '#06b6d4' }}>
          Add Item
        </button>
      </div>
    </form>
  );
};
export default Form_83;
