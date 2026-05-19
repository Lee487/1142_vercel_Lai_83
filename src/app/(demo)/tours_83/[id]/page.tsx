'use client';

import { useParams } from 'next/navigation';

const TourDetailPage_83 = () => {
  const params = useParams();

 
  const id = params?.id;

  console.log('當前 ID:', id);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">ID: {id}</h2>
    </div>
  );
};

export default TourDetailPage_83;