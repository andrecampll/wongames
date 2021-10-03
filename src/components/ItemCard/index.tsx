import Link from 'next/link';
import {
  Wrapper,
  ImageBox,
  Info,
  Title,
  Developer,
  FavButton,
  PriceBox,
  Price,
  BuyBox,
  Content,
  Color,
  ColorsBox,
} from './styles';
import Ribbon, { RibbonColors, RibbonSizes } from '../Ribbon';
import { formatPrice } from '../../utils/format-price';
// import { CartButton } from '../CartButton';
import { WishlistButton } from '../WishlistButton';

export type ItemCardProps = {
  id: string;
  slug?: string;
  name: string;
  image: string;
  price: number;
  promotionalPrice?: number;
  favorite?: boolean;
  onFav?: () => void;
  ribbon?: string;
  ribbonSize?: RibbonSizes;
  ribbonColor?: RibbonColors;
};

export const ItemCard = ({
  id,
  slug,
  name,
  image,
  price,
  promotionalPrice,
  ribbon,
  ribbonSize = 'small',
  ribbonColor = 'primary',
}: ItemCardProps) => (
  <Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <Link href={`/game/${slug}`} passHref>
      <ImageBox>
        <img src={image} alt={name} />
      </ImageBox>
    </Link>
    <Content>
      <Link href={`/game/${slug}`} passHref>
        <Info>
          <Title>{name}</Title>
          <Developer>Unissex</Developer>
        </Info>
      </Link>
      <FavButton>
        <WishlistButton id={id} />
      </FavButton>
      <BuyBox>
        <ColorsBox>
          <Color color="#F4B2B2" />
          <Color color="#7C9AE7" />
        </ColorsBox>
        <PriceBox>
          {!!promotionalPrice && (
            <Price isPromotional>{formatPrice(price)}</Price>
          )}
          <Price>
            {price === 0 ? 'FREE' : formatPrice(promotionalPrice || price)}
          </Price>
          {/* <CartButton id={id} /> */}
        </PriceBox>
      </BuyBox>
    </Content>
  </Wrapper>
);
