import { Wrapper, Footer, Total } from './styles';

import GameItem, { GameItemProps } from '../GameItem';

export type CartListProps = {
  items: GameItemProps[];
  total: string;
};

const CartList = ({ items, total }: CartListProps) => (
  <Wrapper>
    {items.map(item => (
      <GameItem key={item.title} {...item} />
    ))}

    <Footer>
      Total <Total>{total}</Total>
    </Footer>
  </Wrapper>
);

export default CartList;
