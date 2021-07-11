import { Add, ShoppingCart } from '@styled-icons/material-outlined';

import Button from '../Button';
import Heading from '../Heading';
import Radio from '../Radio';

import {
  Wrapper,
  Body,
  Footer,
  CardsList,
  CardItem,
  CardInfo,
  AddCard,
} from './styles';

export type PaymentCard = {
  number: string;
  flag: string;
  img: string;
};

export type PaymentOptionsProps = {
  cards?: PaymentCard[];
  handlePayment: () => void;
};

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => (
  <Wrapper>
    <Body>
      <Heading lineBottom color="black" size="small">
        Payment
      </Heading>

      <CardsList>
        {cards?.map(card => (
          <CardItem key={card.number}>
            <CardInfo>
              <img src={card.img} alt={card.flag} />
              {card.number}
            </CardInfo>

            <Radio
              name="credit-card"
              id={card.number}
              value={card.number}
              onCheck={() => ({})}
            />
          </CardItem>
        ))}
        <AddCard role="button">
          <Add size={14} /> Add a new credit card
        </AddCard>
      </CardsList>
    </Body>

    <Footer>
      <Button as="a" fullWidth minimal>
        Continue shopping
      </Button>
      <Button fullWidth icon={<ShoppingCart />} onClick={handlePayment}>
        Buy now
      </Button>
    </Footer>
  </Wrapper>
);

export default PaymentOptions;
