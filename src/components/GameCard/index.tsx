import {
  FavoriteBorder,
  AddShoppingCart,
  Favorite,
} from '@styled-icons/material-outlined';
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
import Ribbon, { RibbonColors, RibbonSizes } from '../Ribbon';

export type GameCardProps = {
  title: string;
  developer: string;
  image: string;
  price: string;
  promotionalPrice?: string;
  favorite?: boolean;
  onFav?: () => void;
  ribbon?: string;
  ribbonSize?: RibbonSizes;
  ribbonColor?: RibbonColors;
};

const GameCard = ({
  title,
  developer,
  image,
  price,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonSize = 'small',
  ribbonColor = 'primary',
}: GameCardProps) => (
  <Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <ImageBox>
      <img src={image} alt={title} />
    </ImageBox>
    <Content>
      <Info>
        <Title>{title}</Title>
        <Developer>{developer}</Developer>
      </Info>
      <FavButton role="button" onClick={onFav}>
        {favorite ? (
          <Favorite aria-label="Remove from Wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
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
