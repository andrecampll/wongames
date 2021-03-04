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
  Content,
} from './styles';
import Button from '../Button';

export type GameCardProps = {
  title: string;
  developer: string;
  image: string;
  price: string;
  promotionalPrice?: string;
};

const GameCard = ({
  title,
  developer,
  image,
  price,
  promotionalPrice,
}: GameCardProps) => (
  <Wrapper>
    <ImageBox>
      <img src={image} alt={title} />
    </ImageBox>
    <Content>
      <Info>
        <Title>{title}</Title>
        <Developer>{developer}</Developer>
      </Info>
      <FavButton role="button">
        <FavoriteBorder aria-label="Add to Wishlist" />
      </FavButton>
      <BuyBox>
        {!!promotionalPrice && <Price isPromotional>{price}</Price>}
        <Price>{promotionalPrice || price}</Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </BuyBox>
    </Content>
  </Wrapper>
);

export default GameCard;
