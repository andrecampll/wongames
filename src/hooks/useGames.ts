import {
  QueryGames,
  QueryGamesVariables,
} from '../graphql/generated/QueryGames';
import { QUERY_GAMES } from '../graphql/queries/games';
import { initializeApollo } from '../utils/apollo';

export const useGames = async () => {
  const apolloClient = initializeApollo();

  const { data, loading, error } = await apolloClient.query<
    QueryGames,
    QueryGamesVariables
  >({
    query: QUERY_GAMES,
    variables: {
      limit: 100,
    },
  });

  return {
    data,
    loading,
    error,
    apolloClient,
  };
};
