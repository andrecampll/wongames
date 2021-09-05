import Link from 'next/link';
import { useCart } from '../../hooks/cart/useCart';

import Button from '../Button';
import Empty from '../Empty';
import GameItem from '../GameItem';

import { Wrapper, Footer, Total } from './styles';

export type CartListProps = {
  hasButton?: boolean;
};

const CartList = ({ hasButton = false }: CartListProps) => {
  const { items, total } = useCart();

  return (
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
};

export default CartList;
