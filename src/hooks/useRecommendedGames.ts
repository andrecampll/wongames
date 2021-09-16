import { Session } from 'next-auth';
import { QueryRecommended } from '../graphql/generated/QueryRecommended';
import {
  QueryWishlist,
  QueryWishlistVariables,
} from '../graphql/generated/QueryWishlist';
import { QUERY_RECOMMENDED } from '../graphql/queries/recommended';
import { QUERY_WISHLIST } from '../graphql/queries/wishlist';
import { initializeApollo } from '../utils/apollo';

export const useRecommendedGames = async (session?: Session) => {
  const apolloClient = initializeApollo();

  if (!session) return {};

  await apolloClient.query<QueryWishlist, QueryWishlistVariables>({
    query: QUERY_WISHLIST,
    variables: {
      identifier: session.user.email as string,
    },
  });

  const { data, loading, error } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  });

  return {
    data,
    loading,
    error,
  };
};
