import { useSession } from 'next-auth/client';
import { useState, createContext, useContext, useEffect } from 'react';

import { GameCardProps } from '../../components/GameCard';
import { QueryWishlist_wishlists_games } from '../../graphql/generated/QueryWishlist';
import { useQueryWishlist } from '../../graphql/queries/wishlist';
import { gamesMapper } from '../../utils/mappers';

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
  const [session] = useSession();
  const [wishlistItems, setWishlistItems] = useState<
    QueryWishlist_wishlists_games[]
  >([]);
  const isInWishlist = (id: string) => !!id;
  const addToWishlist = (id: string) => id;
  const removeFromWishlist = (id: string) => id;

  const { data, loading } = useQueryWishlist({
    skip: !session?.user?.email,
    context: {
      session,
    },
    variables: {
      identifier: session?.user?.email,
    },
  });

  useEffect(() => {
    setWishlistItems(data?.wishlists[0]?.games || []);
  }, [data?.wishlists]);

  return (
    <WishlistContext.Provider
      value={{
        items: gamesMapper(wishlistItems),
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        loading,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
