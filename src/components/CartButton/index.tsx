import {
  AddShoppingCart,
  RemoveShoppingCart,
} from '@styled-icons/material-outlined';

import Button from '../Button';
import { useCart } from '../../hooks/cart/useCart';

type CartButtonProps = {
  id: string;
};

export const CartButton = ({ id }: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart();

  return (
    <Button
      icon={
        isInCart(id) ? (
          <RemoveShoppingCart aria-label="Remove from cart" />
        ) : (
          <AddShoppingCart aria-label="Add to cart" />
        )
      }
      size="small"
      onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
    />
  );
};
