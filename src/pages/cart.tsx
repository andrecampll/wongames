import { initializeApollo } from '../utils/apollo';
import { QueryRecommended } from '../graphql/generated/QueryRecommended';
import { QUERY_RECOMMENDED } from '../graphql/queries/recommended';
import { gamesMapper, highlightMapper } from '../utils/mappers';

import Cart, { CartPageProps } from '../templates/Cart';

import itemsMock from '../components/CartList/mock';
import cardsMock from '../components/PaymentOptions/mock';

const apolloClient = initializeApollo();

export default function CartPage(props: CartPageProps) {
  return <Cart {...props} />;
}

export async function getServerSideProps() {
  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  });

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
