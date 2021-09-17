import NextLink from 'next/link';
import { signOut } from 'next-auth/client';
import {
  AccountCircle,
  ExitToApp,
  FormatListBulleted,
} from '@styled-icons/material-outlined';

import { Nav, Link } from './styles';

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string;
};

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <Nav>
    <NextLink href="/profile/me" passHref>
      <Link isActive={activeLink === '/profile/me'} title="My profile">
        <AccountCircle size={24} />
        <span>My profile</span>
      </Link>
    </NextLink>

    <NextLink href="/profile/orders" passHref>
      <Link isActive={activeLink === '/profile/orders'} title="My orders">
        <FormatListBulleted size={24} />
        <span>My orders</span>
      </Link>
    </NextLink>

    <Link role="button" onClick={() => signOut()}>
      <ExitToApp size={24} />
      <span>Sign out</span>
    </Link>
  </Nav>
);

export default ProfileMenu;
