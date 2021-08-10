import { QueryRecommended } from '../graphql/generated/QueryRecommended';
import { QUERY_RECOMMENDED } from '../graphql/queries/recommended';
import { initializeApollo } from '../utils/apollo';

export const useRecommendedGames = async () => {
  const apolloClient = initializeApollo();

  const { data, loading, error } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  });

  return {
    data,
    loading,
    error,
  };
};
