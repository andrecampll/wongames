import Button from '../Button';
import { Wrapper } from './styles';

type GameInfoProps = {
  title: string;
  description: string;
  price: string;
};

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <Wrapper>
    <h1>{title}</h1>
    <p>{description}</p>
    <span>{price}</span>
    <div>
      <Button>Add to cart</Button>
      <Button>Wishlist</Button>
    </div>
  </Wrapper>
);

export default GameInfo;
