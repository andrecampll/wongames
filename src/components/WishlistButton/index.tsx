// import { useSession } from 'next-auth/client';
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined';
import { useWishlist } from '../../hooks/wishlist/useWishlist';

import Button, { ButtonProps } from '../Button';

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
  const {
    isInWishlist,
    // addToWishlist,
    // removeFromWishlist,
    // items,
  } = useWishlist();

  const ButtonText = isInWishlist(id)
    ? 'Remove from Wishlist'
    : 'Add to Wishlist';

  return (
    <Button
      icon={
        isInWishlist(id) ? (
          <Favorite aria-label={ButtonText} />
        ) : (
          <FavoriteBorder aria-label={ButtonText} />
        )
      }
      minimal
      size={size}
    >
      {hasText && ButtonText}
    </Button>
  );
};
