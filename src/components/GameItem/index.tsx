import {
  Wrapper,
  GameContent,
  ImageBox,
  Content,
  Title,
  Price,
} from './styles';

export type GameItemProps = {
  img: string;
  title: string;
  price: string;
};

const GameItem = ({ img, title, price }: GameItemProps) => (
  <Wrapper>
    <GameContent>
      <ImageBox>
        <img src={img} alt={title} />
      </ImageBox>

      <Content>
        <Title>{title}</Title>
        <Price>{price}</Price>
      </Content>
    </GameContent>
  </Wrapper>
);

export default GameItem;
