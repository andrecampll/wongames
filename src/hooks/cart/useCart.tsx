import {
  useEffect,
  useState,
  useContext,
  createContext,
  ReactNode,
} from 'react';

import { getStorageItem } from '../../utils/localStorage';

const CART_KEY = 'cartItems';

export type CartContextDTO = {
  items: string[];
};

export const CartContextDefaultValues = {
  items: [],
};

const CartContext = createContext<CartContextDTO>(CartContextDefaultValues);

export type Props = {
  children: ReactNode;
};

const CartProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  useEffect(() => {
    const data = getStorageItem(CART_KEY);

    if (data) {
      setCartItems(data);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
