import Product_83 from '../_components/Product_83';
import Wrapper from '../_assets/wrappers/Shop_83';

import { prisma } from '@/lib/prisma';

type Product = {
  pid: number;
  pname: string | null;
  cat_id: number | null;
  price: number | null;
  img_url: string | null;
  remote_img_url: string | null;
};

const FetchProductsByCategory_83 = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;
  // console.log('category param:', category);

  try {
    const categoryRecord = await prisma.category_83.findFirst({
      where: { cname: category },
    });

    if (!categoryRecord) {
      return <div>Category not found</div>;
    }

    const shop_83 = await prisma.shop_83.findMany({
      where: { cat_id: categoryRecord.cid },
    });

    // console.log('Products by category :', shop_83);

    return (
      <Wrapper>
        <div className='shop-page'>
          <div className='section-title'>
            <h4> Lai, 213410383 </h4>
          </div>
          <div className='collection-page'>
            <h1 className='title'>{category}</h1>
            <div className='items'>
              {shop_83?.map((item: Product) => {
                const { pid, img_url, pname, price } = item;
                return (
                  <Product_83
                    key={pid}
                    pid={pid}
                    img_url={img_url}
                    pname={pname}
                    name={pname}
                    price={price}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Wrapper>
    );
  } catch (error) {
    console.error(`Error fetching products for category ${category}:`, error);
    return <div>Error loading products.</div>;
  }
};

export default FetchProductsByCategory_83;
