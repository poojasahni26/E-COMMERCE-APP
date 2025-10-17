"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  // const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }
  }, [id]);

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="grid md:grid-cols-2 gap-8 p-6 bg-white"
    style={{  width: 1200,
        height:600,
        opacity: 1,
        transform: 'rotate(0deg)',
        paddingTop: 64,
        paddingRight: 165,
        paddingBottom: 64,
        paddingLeft: 165,
        gap: 30,
 }}>
      {/* @ts-expect-error ignore */}
      <img src={product.image} className="rounded-lg object-contain h-96"
      style={{ transform: 'rotate(0deg)',  width: 240,
        height: 340,  }} />
      <div>
       
        <h1 className="text-2xl font-semibold text-center" 
        style={{fontFamily: 'Inter',
            fontWeight: 600,
            fontSize: 24,
            lineHeight: '32px',
            letterSpacing: '0%',
            textAlign: 'center',
          }}>
        {/* @ts-expect-error ignore */}     
  {product.title}</h1>
        {/* @ts-expect-error ignore */}
        <p className="text-green-600 text-xl">${product.price}</p>
        {/* @ts-expect-error ignore */}
        <p className="mt-4 text-gray-700 ">{product.description}</p>
        {/* <button onClick={() => addToCart(product)} className="mt-6 bg-blue-600 text-white px-4 py-2 rounded">Add to Cart</button> */}
      <button
      /* @ts-expect-error ignore */
          onClick={() => addToCart(product)}
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Add to Cart
        </button>

      
      </div>
    </div>
  );
}