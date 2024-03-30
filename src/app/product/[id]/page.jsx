'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useGetProductByidQuery } from '@/redux/app/api/apiproduct';

export default function Home({ params }) {
  const { data, isSuccess, isLoading, error } = useGetProductByidQuery(
    params.id
  );

  if (isLoading || error) return null;

  return (
    <main>
      <h2 className='text-2xl text-red-500 underline font-semibold mb-4'>
        Title: {data.title}
      </h2>
      <Image
        src={data.images[0]}
        alt=''
        height={350}
        width={350}
        className=' rounded-r-lg shadow-lg mb-4'
      />

      <h2 className=' font-semibold text-blue-500'>Item: {data.title}</h2>
      <h2 className=' font-semibold text-blue-500'>Price: {data.price}</h2>
      <h2 className=' font-semibold text-blue-500'>rating: {data.rating}</h2>
      <h2 className=' font-semibold text-blue-500'>stock: {data.stock}</h2>
      <h2 className=' font-semibold text-blue-500 text-wrap'>
        description: {data.description}
      </h2>
    </main>
  );
}
