import { Download } from '@styled-icons/boxicons-solid/Download';

import {
  Wrapper,
  GameContent,
  ImageBox,
  Content,
  Title,
  Price,
  DownloadLink,
} from './styles';

export type GameItemProps = {
  img: string;
  title: string;
  price: string;
  downloadLink?: string;
};

const GameItem = ({ img, title, price, downloadLink }: GameItemProps) => (
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
        <Price>{price}</Price>
      </Content>
    </GameContent>
  </Wrapper>
);

export default GameItem;
