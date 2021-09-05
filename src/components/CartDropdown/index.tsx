import CartIcon from '../CartIcon';
import Dropdown from '../Dropdown';
import CartList from '../CartList';

import { Wrapper } from './styles';

const CartDropdown = () => (
  <Wrapper>
    <Dropdown title={<CartIcon />}>
      <CartList hasButton />
    </Dropdown>
  </Wrapper>
);

export default CartDropdown;
