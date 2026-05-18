import SingleItem_83 from './SingleItem_83';

const Items_83 = ({ items, removeItem, editItem }) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return (
          <SingleItem_83
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};
export default Items_83;
