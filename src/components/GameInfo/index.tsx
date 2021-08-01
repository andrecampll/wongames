import {
  AddShoppingCart,
  FavoriteBorder,
} from '@styled-icons/material-outlined';

import Heading from '../Heading';
import Ribbon from '../Ribbon';
import Button from '../Button';
import { Wrapper, Description, ButtonsWrapper } from './styles';

export type GameInfoProps = {
  title: string;
  description: string;
  price: number;
};

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">
      {new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD',
      }).format(price)}
    </Ribbon>

    <Description>{description}</Description>

    <ButtonsWrapper>
      <Button icon={<AddShoppingCart />} size="large">
        Add to cart
      </Button>
      <Button icon={<FavoriteBorder />} size="large" minimal>
        Wishlist
      </Button>
    </ButtonsWrapper>
  </Wrapper>
);

export default GameInfo;
