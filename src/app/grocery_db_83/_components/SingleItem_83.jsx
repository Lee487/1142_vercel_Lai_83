'use client';
import DeleteButton_83 from './DeleteButton_83';
import { editGrocery } from '@/action/grocery.action_83';

const SingleItem_83 = ({ item }) => {
  return (
    <div className='single-item card flex items-center'>
      <input
        type='checkbox'
        checked={item.completed}
        onChange={() => editGrocery(item.id, !item.completed)}
      />
      <p
        style={{ textTransform: 'capitalize', textDecoration: item.completed ? 'line-through' : 'none' }}
      >
        {item.name}
      </p>
      <div className='ml-4'>
        <DeleteButton_83 id={item.id} />
      </div>
    </div>
  );
};

export default SingleItem_83;