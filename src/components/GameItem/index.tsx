import { Download } from '@styled-icons/boxicons-solid/Download';
import { useCart } from '../../hooks/cart/useCart';

import {
  Wrapper,
  GameContent,
  ImageBox,
  Content,
  Title,
  Price,
  DownloadLink,
  PaymentContent,
  CardInfo,
  Group,
  Remove,
} from './styles';

export type PaymentInfoProps = {
  number: string;
  flag: string;
  img: string;
  purchaseDate: string;
};

export type GameItemProps = {
  id: string;
  img: string;
  title: string;
  price: string;
  downloadLink?: string;
  paymentInfo?: PaymentInfoProps;
};

const GameItem = ({
  id,
  img,
  title,
  price,
  downloadLink,
  paymentInfo,
}: GameItemProps) => {
  const { isInCart, removeFromCart } = useCart();

  return (
    <Wrapper>
      <GameContent>
        <ImageBox>
          <img src={img} alt={title} />
        </ImageBox>

        <Content>
          <Title>
            {title}
            {!!downloadLink && (
              <DownloadLink
                href={downloadLink}
                target="_blank"
                aria-label={`Get ${title} here`}
              >
                <Download size={22} />
              </DownloadLink>
            )}
          </Title>
          <Group>
            <Price>{price}</Price>
            {isInCart(id) && (
              <Remove onClick={() => removeFromCart(id)}>Remove</Remove>
            )}
          </Group>
        </Content>
      </GameContent>

      {!!paymentInfo && (
        <PaymentContent>
          <p>{paymentInfo.purchaseDate}</p>
          <CardInfo>
            <span>{paymentInfo.number}</span>
            <img src={paymentInfo.img} alt={paymentInfo.flag} />
          </CardInfo>
        </PaymentContent>
      )}
    </Wrapper>
  );
};

export default GameItem;
