import CartIcon from '../CartIcon';
import Dropdown from '../Dropdown';
import CartList from '../CartList';
import { GameItemProps } from '../GameItem';

import { Wrapper } from './styles';

export type CartDropdownProps = {
  items?: GameItemProps[];
  total?: string;
};

const CartDropdown = ({ items = [], total }: CartDropdownProps) => (
  <Wrapper>
    <Dropdown title={<CartIcon />}>
      <CartList items={items} total={total} hasButton />
    </Dropdown>
  </Wrapper>
);

export default CartDropdown;
