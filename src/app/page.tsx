"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  console.log(products);

  return (
    <div className='w-full min-h-screen py-[42px] px-20 flex flex-col gap-10 bg-white'>
      <div className='flex flex-row gap-7 text-black leading-[64px] text-3xl'>
        <Link href="/">Home</Link>
        <Link href="/cart">Cart</Link>
      </div>
      <div className='w-full flex flex-col gap-10'>
        <h2 className='font-extrabold text-5xl leading-[64px] text-[#18191F]'>Products</h2>
        <div className="w-full grid grid-cols-4 gap-x-20 gap-y-20">
          {products.map(product => (
            // @ts-expect-error ignore
            <Link href={`/product/${product.id}`} key={product.id} className="w-full flex flex-col h-auto gap-3">
              {/* @ts-expect-error ignore */}
              <img src={product.image} alt={product.title} className="w-full h-[366px] object-cover" />
              <div className="flex flex-col gap-2">
                {/* @ts-expect-error ignore */}
                <h2 className="text-xl text-[#18191F] leading-[26px]">{product.title}</h2>
                {/* @ts-expect-error ignore */}
                <p className="px-4 font-semibold text-2xl leading-8 text-[#18191F]">Price: ${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    
  );
}