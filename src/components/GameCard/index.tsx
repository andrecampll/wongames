import {
  FavoriteBorder,
  AddShoppingCart,
} from 'styled-icons/material-outlined';
import {
  Wrapper,
  ImageBox,
  Info,
  Title,
  Developer,
  FavButton,
  Price,
  BuyBox,
} from './styles';
import Button from '../Button';

export type GameCardProps = {
  title: string;
  developer: string;
  image: string;
  price: string;
};

const GameCard = ({ title, developer, image, price }: GameCardProps) => (
  <Wrapper>
    <ImageBox>
      <img src={image} alt={title} />
    </ImageBox>
    <Info>
      <Title>{title}</Title>
      <Developer>{developer}</Developer>
    </Info>
    <FavButton role="button">
      <FavoriteBorder aria-label="Add to Wishlist" />
    </FavButton>
    <BuyBox>
      <Price>{price}</Price>
      <Button icon={<AddShoppingCart />} size="small" />
    </BuyBox>
  </Wrapper>
);

export default GameCard;
