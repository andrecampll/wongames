import {
  useEffect,
  useState,
  useContext,
  createContext,
  ReactNode,
} from 'react';
import { useQueryGames } from '../../graphql/queries/games';
import { formatPrice } from '../../utils/format-price';

import { getStorageItem } from '../../utils/localStorage';
import { cartMapper } from '../../utils/mappers';

const CART_KEY = 'cartItems';

type CartItem = {
  id: string;
  img: string;
  title: string;
  price: string;
};

export type CartContextDTO = {
  items: CartItem[];
  quantity: number;
  total: string;
};

export const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: '$0.00',
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

  const { data } = useQueryGames({
    skip: !cartItems?.length,
    variables: {
      where: {
        id: cartItems,
      },
    },
  });

  const total = data?.games.reduce((acc, game) => {
    return acc + game.price;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games),
        quantity: cartItems.length,
        total: formatPrice(total || 0),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
