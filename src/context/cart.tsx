import React, { createContext, useEffect, useState } from 'react';

type Cart = {
  name: string;
  _id: string;
  price: number;
  quantity: number;
};

interface ICart {
  cart: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
}

export const context = createContext({} as ICart);

const CartContext: React.FC = ({ children }) => {
  const [cart, setCart] = useState<Cart[]>([]);

  useEffect(() => {
    const getCart = JSON.parse(localStorage.getItem('CBcart') as string);
    if (getCart) setCart(getCart);
  }, []);

  // const addLocalStorage = () => {
  //   localStorage.setItem('CBcart', JSON.stringify(cart));
  // };

  return <context.Provider value={{ cart, setCart }}>{children}</context.Provider>;
};

export default CartContext;
