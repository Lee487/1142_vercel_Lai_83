'use client';

import SingleItem_83 from './SingleItem_xx';

// 移除 async，改用參數 { items } 接收資料
const Items_83 = ({ items }) => {
  if (!items || items.length === 0) {
    return <div className='items' style={{ marginTop: '2rem' }}>清單目前是空的...</div>;
  }

  return (
    <div className='items'>
      {items.map((item) => {
        return (
          <SingleItem_83 key={item.id} item={item} />
        );
      })}
    </div>
  );
};

export default Items_83;