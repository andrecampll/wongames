import Base from '../Base';
import Empty from '../../components/Empty';
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

import { Content } from './styles';

export type CartPageProps = {
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>;

const Cart = ({
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  cards,
}: CartPageProps) => {
  const handlePayment = () => ({});

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        {items.length ? (
          <Content>
            <CartList items={items} total={total} />

            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </Content>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        )}
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
