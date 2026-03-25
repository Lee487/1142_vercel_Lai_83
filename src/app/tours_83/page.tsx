import Link from 'next/link';
import Image from 'next/image';
const url ='http://www.course-api.com/react-tours-project';

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const fetchTours = async () => {
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  return data;
};


const ToursPage_83 = async () => {
  const tours =await fetchTours();
  console.log('tours',tours);
  return (
    <section>
      <h1 >Tours_83</h1>
      <div className='grid md:grid-cols-2 gap-x-8'>
        {tours?.map((tour) =>{
          const{id,name,image} = tour;
          return (
            <Link key={id} href={`/tours_83/${id}`}>
          {/* 這裡加入 relative 和 h-48(高度) 確保圖片能顯示 */}
          <div className='relative h-48 mb-2'>
            <Image 
              src={image} 
              alt={name} 
              fill 
              sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw'
              priority
              className='object-cover rounded'
            />
            </div>  
            <h2>{name}</h2>
          </Link>
          );
          })}
          </div>
    </section>
  );
};


export default ToursPage_83;