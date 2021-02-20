import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';

import Logo from '../Logo';

import { Wrapper, IconWrapper, LogoWrapper, MenuGroup } from './styles';

const Menu = () => (
  <Wrapper>
    <IconWrapper>
      <MenuIcon aria-label="Open Menu" />
    </IconWrapper>
    <LogoWrapper>
      <Logo hideOnMobile />
    </LogoWrapper>
    <MenuGroup>
      <IconWrapper>
        <SearchIcon aria-label="Search" />
      </IconWrapper>

      <IconWrapper>
        <ShoppingCartIcon aria-label="Open Shopping Cart" />
      </IconWrapper>
    </MenuGroup>
  </Wrapper>
);

export default Menu;
