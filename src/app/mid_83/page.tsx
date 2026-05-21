import Wrapper from './_assets/wrappers/Shop_83';
import Link from 'next/link';
import Image from 'next/image';

import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

const fetchCategory_83 = async () => {
  try {
    const categories = await prisma.category_83.findMany();
    return categories;
  } catch (error) {
    console.error('Database connection failed during build for /mid_83:', error);
    return [];
  }
};

const StaticPage_83 = async () => {
  const categories_83 = await fetchCategory_83();
  // console.log('Fetched categories:', categories_83);
  return (
    <Wrapper>
      <div className='max-w-4xl mx-auto shop-page'>
        <div className='section-title'>
          <h4> Lai, 213410383 </h4>
        </div>
        <div className='homepage'>
          <div className='directory-menu'>
            {categories_83?.map((item) => {
              const { cid, cname, size, image_url } = item;
              return (
                <div className={`${size} menu-item`} key={cid}>
                  <Image
                    className='background-image'
                    src={image_url || '/default.jpg'}
                    alt={cname || ''}
                    width={500}
                    height={500}
                  />
                  <Link href={`/mid_83/${cname}`} className='content'>
                    <h1 className='title'>{item.cname}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default StaticPage_83;
