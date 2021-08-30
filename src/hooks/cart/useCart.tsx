import { useContext, createContext, ReactNode } from 'react';

export type CartContextDTO = Record<string, never>;

export const CartContextDefaultValues = {};

const CartContext = createContext<CartContextDTO>(CartContextDefaultValues);

type Props = {
  children: ReactNode;
};

const CartProvider = ({ children }: Props) => {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
