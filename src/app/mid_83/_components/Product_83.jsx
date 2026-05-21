import DeleteProduct_83 from './DeleteProduct_83';
import Image from 'next/image';

const Product_83 = ({ img_url, pname, name, price, pid }) => {
  const displayName = pname || name;
  return (
    <div className='collection-item'>
      <Image
        className='image'
        src={img_url}
        alt={displayName}
        width={300}
        height={350}
      />
      <div className='collection-footer'>
        <span className='name'>{displayName}</span>
        <span className='price'>{price}</span>
      </div>
      <div className='flex justify-between items-center gap-4 custom-button'>
        <button>Add to Cart</button>
        <DeleteProduct_83 pid={pid} />
      </div>
    </div>
  );
};
export default Product_83;
