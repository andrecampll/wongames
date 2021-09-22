import { useEffect } from 'react';
import Link from 'next/link';
import { Done } from '@styled-icons/material-outlined';
import { useCart } from '../../hooks/cart/useCart';

import Base from '../Base';

import { GameCardProps } from '../../components/GameCard';
import { HighlightProps } from '../../components/Highlight';
import { Container } from '../../components/Container';
import Showcase from '../../components/Showcase';

import { Wrapper, Heading, CheckMark, Text } from './styles';

export type SuccessTemplateProps = {
  recommendedTitle: string;
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
};

const Success = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight,
}: SuccessTemplateProps) => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <Base>
      <Container>
        <Wrapper>
          <Heading>Your purchase was successful!</Heading>

          <CheckMark>
            <Done />
          </CheckMark>

          <Text>
            Wait for your payment details by email. Your game is now available
            for download inside your{' '}
            <Link href="/profile/orders">
              <a>Orders List</a>
            </Link>
            . Enjoy!
          </Text>
        </Wrapper>
      </Container>

      <Showcase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  );
};

export default Success;
