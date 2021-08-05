/* eslint-disable react-hooks/rules-of-hooks */
import { useRecommendedGames } from '../hooks/useRecommendedGames';
import { gamesMapper, highlightMapper } from '../utils/mappers';

import Cart, { CartPageProps } from '../templates/Cart';

import itemsMock from '../components/CartList/mock';
import cardsMock from '../components/PaymentOptions/mock';

export default function CartPage(props: CartPageProps) {
  return <Cart {...props} />;
}

export async function getServerSideProps() {
  const { data } = await useRecommendedGames();

  return {
    props: {
      items: itemsMock,
      total: '$ 430,00',
      cards: cardsMock,
      recommendedGames: gamesMapper(data.recommended.section.games),
      recommendedHighlight: highlightMapper(data.recommended.section.highlight),
    },
  };
}
