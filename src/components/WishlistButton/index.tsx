/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
// import { useSession } from 'next-auth/client';
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined';
import { useState } from 'react';
import { useWishlist } from '../../hooks/wishlist/useWishlist';

import Button, { ButtonProps } from '../Button';
import Spinner from '../Spinner';

type WishlistButtonProps = {
  id: string;
  hasText?: boolean;
} & Pick<ButtonProps, 'size'>;

export const WishlistButton = ({
  id,
  hasText,
  size = 'small',
}: WishlistButtonProps) => {
  // const [session] = useSession();
  const [loading, setLoading] = useState(false);
  const { isInWishlist, removeFromWishlist, addToWishlist } = useWishlist();

  const handleClick = async () => {
    setLoading(true);
    isInWishlist(id) ? await removeFromWishlist(id) : await addToWishlist(id);
    setLoading(false);
  };

  const ButtonText = isInWishlist(id)
    ? 'Remove from Wishlist'
    : 'Add to Wishlist';

  return (
    <Button
      icon={
        loading ? (
          <Spinner />
        ) : isInWishlist(id) ? (
          <Favorite aria-label={ButtonText} />
        ) : (
          <FavoriteBorder aria-label={ButtonText} />
        )
      }
      onClick={handleClick}
      minimal
      size={size}
    >
      {hasText && ButtonText}
    </Button>
  );
};
