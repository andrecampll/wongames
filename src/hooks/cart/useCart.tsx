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

const CART_KEY = 'cartItems';

type CartItem = {
  id: string;
  img: string;
  title: string;
  price: string;
};

export type CartContextDTO = {
  items: CartItem[];
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

  const { data } = useQueryGames({
    skip: !cartItems?.length,
    variables: {
      where: {
        id: cartItems,
      },
    },
  });

  return (
    <CartContext.Provider
      value={{
        items: data?.games.map(game => ({
          id: game.id,
          img: `http://localhost:1337${game.cover?.url}`,
          price: formatPrice(game.price),
          title: game.name,
        })),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
