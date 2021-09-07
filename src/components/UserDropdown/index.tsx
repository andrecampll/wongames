/* eslint-disable react/jsx-wrap-multilines */
import NextLink from 'next/link';
import { signOut } from 'next-auth/client';
import {
  AccountCircle,
  FavoriteBorder,
  ExitToApp,
} from '@styled-icons/material-outlined';
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown';

import Dropdown from '../Dropdown';

import { Username, Nav, Link } from './styles';

export type UserDropdownProps = {
  username: string;
};

const UserDropdown = ({ username }: UserDropdownProps) => (
  <Dropdown
    title={
      <>
        <AccountCircle size={24} />
        <Username>{username}</Username>
        <ChevronDown size={24} />
      </>
    }
  >
    <Nav>
      <NextLink href="/profile/me" passHref>
        <Link>
          <AccountCircle />
          <span>My profile</span>
        </Link>
      </NextLink>

      <NextLink href="/wishlist" passHref>
        <Link title="Wishlist">
          <FavoriteBorder />
          <span>Wishlist</span>
        </Link>
      </NextLink>

      <Link role="button" onClick={() => signOut()} title="Sign out">
        <ExitToApp />
        <span>Sign out</span>
      </Link>
    </Nav>
  </Dropdown>
);

export default UserDropdown;
