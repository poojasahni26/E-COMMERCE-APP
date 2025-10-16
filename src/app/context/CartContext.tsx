import { createContext, useContext, useState } from 'react';
// @ts-expect-error ignore
const CartContext = createContext();

export const useCart = () => useContext(CartContext);
// @ts-expect-error ignore
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  // @ts-expect-error ignore
  const addToCart = (product) => {
    // @ts-expect-error ignore
    setCartItems(prev => [...prev, product]);
  };

  // @ts-expect-error ignore
  const removeFromCart = (id) => {
    // @ts-expect-error ignore
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};