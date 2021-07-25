import Link from 'next/link';
import Button from '../Button';
import GameItem, { GameItemProps } from '../GameItem';

import { Wrapper, Footer, Total } from './styles';

export type CartListProps = {
  items: GameItemProps[];
  total: string;
  hasButton?: boolean;
};

const CartList = ({ items, total, hasButton = false }: CartListProps) => (
  <Wrapper>
    {items.map(item => (
      <GameItem key={item.title} {...item} />
    ))}

    <Footer>
      {!hasButton && <span>Total:</span>}
      <Total>{total}</Total>

      {hasButton && (
        <Link href="/cart">
          <Button as="a">Buy it now</Button>
        </Link>
      )}
    </Footer>
  </Wrapper>
);

export default CartList;
