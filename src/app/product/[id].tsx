"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCart } from '../../../context/CartContext';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }
  }, [id]);

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="grid md:grid-cols-2 gap-8 p-6">
      <img src={product.image} className="rounded-lg object-contain h-96" />
      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-green-600 text-xl">${product.price}</p>
        <p className="mt-4 text-gray-700">{product.description}</p>
        <button onClick={() => addToCart(product)} className="mt-6 bg-blue-600 text-white px-4 py-2 rounded">Add to Cart</button>
      </div>
    </div>
  );
}