import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart';

import { Wrapper, Badge } from './styles';

export type CartIconProps = {
  quantity?: number;
};

const CartIcon = ({ quantity = 0 }: CartIconProps) => (
  <Wrapper>
    {quantity > 0 && <Badge aria-label="Cart Items">{quantity}</Badge>}
    <ShoppingCart aria-label="Shopping Cart" />
  </Wrapper>
);

export default CartIcon;
