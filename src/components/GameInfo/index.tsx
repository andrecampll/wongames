import { FavoriteBorder } from '@styled-icons/material-outlined';

import Heading from '../Heading';
import Ribbon from '../Ribbon';
import Button from '../Button';
import { Wrapper, Description, ButtonsWrapper } from './styles';
import { formatPrice } from '../../utils/format-price';
import { CartButton } from '../CartButton';

export type GameInfoProps = {
  id: string;
  title: string;
  description: string;
  price: number;
};

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
  <Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

    <Description>{description}</Description>

    <ButtonsWrapper>
      <CartButton id={id} size="large" hasText />
      <Button icon={<FavoriteBorder />} size="large" minimal>
        Wishlist
      </Button>
    </ButtonsWrapper>
  </Wrapper>
);

export default GameInfo;
