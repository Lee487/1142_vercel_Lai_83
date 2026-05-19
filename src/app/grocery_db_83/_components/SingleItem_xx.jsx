'use client';
import DeleteButton_83 from './DeleteButton_83';
import { editGrocery } from '@/action/grocery.action_83';

const SingleItem_xx = ({ item }) => {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.completed}
        // 確保這裡傳入的是 !item.completed，這樣點擊才會反轉狀態
        onChange={() => editGrocery(item.id, !item.completed)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed ? 'line-through' : 'none',
        }}
      >
        {item.name}
      </p>
      <DeleteButton_83 id={item.id} />
    </div>
  );
};

export default SingleItem_xx;