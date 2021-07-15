import NextLink from 'next/link';
import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted,
} from '@styled-icons/material-outlined';

import { Nav, Link } from './styles';

const ProfileMenu = () => (
  <Nav>
    <NextLink href="/profile/me" passHref>
      <Link>
        <AccountCircle size={24} />
        <span>My profile</span>
      </Link>
    </NextLink>

    <NextLink href="/profile/cards" passHref>
      <Link>
        <CreditCard size={24} />
        <span>My cards</span>
      </Link>
    </NextLink>

    <NextLink href="/profile/orders" passHref>
      <Link>
        <FormatListBulleted size={24} />
        <span>My orders</span>
      </Link>
    </NextLink>

    <NextLink href="/logout" passHref>
      <Link>
        <ExitToApp size={24} />
        <span>Sign out</span>
      </Link>
    </NextLink>
  </Nav>
);

export default ProfileMenu;
