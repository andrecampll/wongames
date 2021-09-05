import { Info } from '@styled-icons/material-outlined/Info';
import Base from '../Base';
import Heading from '../../components/Heading';
import Showcase from '../../components/Showcase';
import { Divider } from '../../components/Divider';
import { Container } from '../../components/Container';
import { GameCardProps } from '../../components/GameCard';
import { HighlightProps } from '../../components/Highlight';
import CartList, { CartListProps } from '../../components/CartList';
import PaymentOptions, {
  PaymentOptionsProps,
} from '../../components/PaymentOptions';

import { Content, Text } from './styles';

export type CartPageProps = {
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>;

const Cart = ({
  recommendedGames,
  recommendedHighlight,
  cards,
}: CartPageProps) => {
  const handlePayment = () => ({});

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        <Content>
          <CartList />

          <PaymentOptions cards={cards} handlePayment={handlePayment} />
        </Content>
        <Text>
          <Info size={18} /> Your purchase is protected by a secure connection
          from the WON platform. By purchasing from our store you agree and
          agree to our <a href="#">terms of use.</a> After making the purchase
          you are entitled to a refund within a maximum of 30 days, without any
          additional cost, as long as the download of the purchased game has not
          occurred after your purchase.
        </Text>
        <Divider />
      </Container>

      <Showcase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  );
};

export default Cart;
