import DeleteProduct_xx from './DeleteProduct_xx';

const Product_xx = ({ img_url, pname, name, price, pid }) => {
  const displayName = pname || name;
  return (
    <div className='collection-item'>
      <img className='image' src={img_url} />
      <div className='collection-footer'>
        <span className='name'>{displayName}</span>
        <span className='price'>{price}</span>
      </div>
      <div className='flex justify-between items-center gap-4 custom-button'>
        <button>Add to Cart</button>
        <DeleteProduct_xx pid={pid} />
      </div>
    </div>
  );
};
export default Product_xx;
