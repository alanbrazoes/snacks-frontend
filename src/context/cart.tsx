import React, { createContext, useContext, useEffect, useState } from 'react';

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

const context = createContext({} as ICart);

const CartContext: React.FC = ({ children }) => {
  const [cart, setCart] = useState<Cart[]>([]);

  useEffect(() => {
    const getCart: Cart[] | null = JSON.parse(window.localStorage.getItem('CBcart') as string);
    if (getCart) {
      setCart(getCart);
    } else {
      addLocalStorage();
    }
  }, []);

  useEffect(() => addLocalStorage(), [cart]);

  const addLocalStorage = () => {
    localStorage.setItem('CBcart', JSON.stringify(cart));
  };

  return <context.Provider value={{ cart, setCart }}>{children}</context.Provider>;
};

const useCart = () => useContext(context);

export { CartContext, useCart };
