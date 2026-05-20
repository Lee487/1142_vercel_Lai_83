'use client';

import { useEffect, useState } from 'react';
import Product_83 from '../../_components/Product_83';
import Wrapper from '../../_assets/wrappers/Shop_83';

import { useParams } from 'next/navigation';

const FetchProductsByCategory_83 = () => {
  const [shop_83, setShop_83] = useState([]);
  const params = useParams();
  const cat = params.category;

  const fetchProductsFromNode = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/shop_83/${cat}`);
      const data = await response.json();
      console.log('shop_83 data', data);
      if (data.length !== 0) {
        setShop_83(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductsFromNode();
  }, [cat]);

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h4> Lai, 213410383 </h4>
        </div>
        <div className='collection-page'>
          <h1 className='title capitalize'>{cat}</h1>
          <div className='items'>
            {shop_83?.map((item) => {
              const { id, img_url, name, price } = item;
              return (
                <Product_83
                  key={id}
                  img_url={img_url}
                  name={name}
                  price={price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FetchProductsByCategory_83;
