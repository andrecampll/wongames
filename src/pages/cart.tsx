import { GetServerSidePropsContext } from 'next';
import protectedRoutes from '../utils/protectedUtils';
import { initializeApollo } from '../utils/apollo';
import { gamesMapper, highlightMapper } from '../utils/mappers';
import { QUERY_RECOMMENDED } from '../graphql/queries/recommended';
import { QueryRecommended } from '../graphql/generated/QueryRecommended';

import Cart, { CartPageProps } from '../templates/Cart';

import itemsMock from '../components/CartList/mock';
import cardsMock from '../components/PaymentOptions/mock';

export default function CartPage(props: CartPageProps) {
  return <Cart {...props} />;
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await protectedRoutes(ctx);
  const apolloClient = initializeApollo(null, session);

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  });

  return {
    props: {
      session,
      items: itemsMock,
      total: '$ 430,00',
      cards: cardsMock,
      recommendedGames: gamesMapper(data.recommended.section.games),
      recommendedHighlight: highlightMapper(data.recommended.section.highlight),
    },
  };
}
