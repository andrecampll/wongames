import Cart, { CartPageProps } from '../templates/Cart';

import itemsMock from '../components/CartList/mock';
import highlightMock from '../components/Highlight/mock';
import gamesMock from '../components/GameCardSlider/mock';
import cardsMock from '../components/PaymentOptions/mock';

export default function CartPage(props: CartPageProps) {
  return <Cart {...props} />;
}

export async function getServerSideProps() {
  return {
    props: {
      items: itemsMock,
      total: '$ 430,00',
      cards: cardsMock,
      recommendedGames: gamesMock,
      recommendedHighlight: highlightMock,
    },
  };
}
