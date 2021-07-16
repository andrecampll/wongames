import Heading from '../Heading';
import { PaymentCard } from '../PaymentOptions';

import { Card } from './styles';

export type CardsListProps = {
  cards?: PaymentCard[];
};

const CardsList = ({ cards }: CardsListProps) => (
  <>
    <Heading lineBottom color="black" size="small">
      My cards
    </Heading>

    {cards.map(card => (
      <Card key={card.number}>
        <img src={card.img} alt={card.flag} />
        <span>{card.number}</span>
      </Card>
    ))}
  </>
);

export default CardsList;
