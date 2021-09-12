import { createContext, useContext } from 'react';

import { GameCardProps } from '../../components/GameCard';

export type WishlistContextDTO = {
  items: GameCardProps[];
  isInWishlist: (id: string) => boolean;
  addToWishlist: (id: string) => void;
  removeFromWishlist: (id: string) => void;
  loading: boolean;
};

export const WishlistContextDefaultValues = {
  items: [],
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
  loading: false,
};

const WishlistContext = createContext<WishlistContextDTO>(
  WishlistContextDefaultValues,
);

export type WishlistProviderProps = {
  children: React.ReactNode;
};

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const isInWishlist = (id: string) => !!id;
  const addToWishlist = (id: string) => id;
  const removeFromWishlist = (id: string) => id;

  const loading = true;

  return (
    <WishlistContext.Provider
      value={{
        items: [],
        isInWishlist,
        addToWishlist,
        loading,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
