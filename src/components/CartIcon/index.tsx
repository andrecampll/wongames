import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart';
import { useCart } from '../../hooks/cart/useCart';

import { Wrapper, Badge } from './styles';

const CartIcon = () => {
  const { quantity } = useCart();

  return (
    <Wrapper>
      {quantity > 0 && <Badge aria-label="Cart Items">{quantity}</Badge>}
      <ShoppingCart aria-label="Shopping Cart" />
    </Wrapper>
  );
};

export default CartIcon;
