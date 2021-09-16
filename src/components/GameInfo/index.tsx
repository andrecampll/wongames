import { formatPrice } from '../../utils/format-price';

import Heading from '../Heading';
import Ribbon from '../Ribbon';
import { CartButton } from '../CartButton';
import { WishlistButton } from '../WishlistButton';

import { Wrapper, Description, ButtonsWrapper } from './styles';

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
      <WishlistButton id={id} hasText size="large" />
    </ButtonsWrapper>
  </Wrapper>
);

export default GameInfo;
