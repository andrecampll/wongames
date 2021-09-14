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
import Ribbon, { RibbonColors, RibbonSizes } from '../Ribbon';
import { formatPrice } from '../../utils/format-price';
import { CartButton } from '../CartButton';
import { WishlistButton } from '../WishlistButton';

export type GameCardProps = {
  id: string;
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
  id,
  slug,
  title,
  developer,
  image,
  price,
  promotionalPrice,
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
      <FavButton>
        <WishlistButton id={id} />
      </FavButton>
      <BuyBox>
        {!!promotionalPrice && (
          <Price isPromotional>{formatPrice(price)}</Price>
        )}
        <Price>
          {price === 0 ? 'FREE' : formatPrice(promotionalPrice || price)}
        </Price>
        <CartButton id={id} />
      </BuyBox>
    </Content>
  </Wrapper>
);

export default GameCard;
