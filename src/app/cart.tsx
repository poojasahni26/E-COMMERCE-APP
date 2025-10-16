import { useCart } from './context/CartContext';

export default function Cart() {
  // @ts-expect-error ignore
  const { cartItems, removeFromCart } = useCart();
  // @ts-expect-error ignore
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {/* @ts-expect-error ignore */}
      {cartItems.map(item => (
        <div key={item.id} className="flex items-center justify-between border-b py-4">
          <div className="flex items-center gap-4">
            <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p>${item.price}</p>
            </div>
          </div>
          <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:underline">Remove</button>
        </div>
      ))}
      <div className="text-right mt-6">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded">Checkout</button>
      </div>
    </div>
  );
}