import Link from 'next/link';
import Button from '../Button';
import Empty from '../Empty';
import GameItem, { GameItemProps } from '../GameItem';

import { Wrapper, Footer, Total } from './styles';

export type CartListProps = {
  items?: GameItemProps[];
  total?: string;
  hasButton?: boolean;
};

const CartList = ({ items = [], total, hasButton = false }: CartListProps) => (
  <Wrapper isEmpty={!items.length}>
    {items.length ? (
      <>
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
      </>
    ) : (
      <Empty
        title="Your cart is empty"
        description="Go back to the store and explore great games and offers."
        hasLink
      />
    )}
  </Wrapper>
);

export default CartList;
