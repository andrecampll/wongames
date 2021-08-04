import {
  FavoriteBorder,
  AddShoppingCart,
  Favorite,
} from '@styled-icons/material-outlined';
import Link from 'next/link';
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
import { formatPrice } from '../../utils/format-price';

export type GameCardProps = {
  slug?: string;
  title: string;
  developer: string;
  image: string;
  price: number;
  promotionalPrice?: number;
  favorite?: boolean;
  onFav?: () => void;
  ribbon?: string;
  ribbonSize?: RibbonSizes;
  ribbonColor?: RibbonColors;
};

const GameCard = ({
  slug,
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
    <Link href={`/game/${slug}`} passHref>
      <ImageBox>
        <img src={image} alt={title} />
      </ImageBox>
    </Link>
    <Content>
      <Link href={`/game/${slug}`} passHref>
        <Info>
          <Title>{title}</Title>
          <Developer>{developer}</Developer>
        </Info>
      </Link>
      <FavButton role="button" onClick={onFav}>
        {favorite ? (
          <Favorite aria-label="Remove from Wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </FavButton>
      <BuyBox>
        {!!promotionalPrice && (
          <Price isPromotional>{formatPrice(price)}</Price>
        )}
        <Price>
          {price === 0 ? 'FREE' : formatPrice(promotionalPrice || price)}
        </Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </BuyBox>
    </Content>
  </Wrapper>
);

export default GameCard;
