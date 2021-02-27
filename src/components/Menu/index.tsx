import { useState } from 'react';

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

import Logo from '../Logo';

import {
  Wrapper,
  IconWrapper,
  LogoWrapper,
  MenuGroup,
  MenuFull,
  MenuNav,
  MenuLink,
  RegisterBox,
  CreateAccount,
} from './styles';
import Button from '../Button';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <IconWrapper onClick={() => setIsOpen(true)}>
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

      <MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <MenuNav>
          <MenuLink href="#">Home</MenuLink>
          <MenuLink href="#">Explore</MenuLink>
        </MenuNav>

        <RegisterBox>
          <Button fullWidth size="large">
            Log in now
          </Button>

          <span>or</span>

          <CreateAccount href="#" title="Sign Up">
            Sign Up
          </CreateAccount>
        </RegisterBox>
      </MenuFull>
    </Wrapper>
  );
};

export default Menu;
