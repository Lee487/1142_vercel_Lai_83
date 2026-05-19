import SingleItem_83 from './SingleItem_83';

const Items_83 = ({ items }) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return <SingleItem_83 key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Items_83;
