/* eslint-disable jsx-a11y/aria-role */
import Link from 'next/link';
import Button from '../Button';

import { Wrapper, Image, Title, Description } from './styles';

export type EmptyProps = {
  title: string;
  description: string;
  hasLink?: boolean;
};

const Empty = ({ title, description, hasLink = true }: EmptyProps) => (
  <Wrapper>
    <Image
      src="/img/empty.svg"
      alt="a gamer in a couch playing videogame"
      role="image"
    />

    <Title>{title}</Title>
    <Description>{description}</Description>

    {!!hasLink && (
      <Link href="/" passHref>
        <Button as="a">Go back to store</Button>
      </Link>
    )}
  </Wrapper>
);

export default Empty;
