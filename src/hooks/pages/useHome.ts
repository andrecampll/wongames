import {
  QueryHome,
  QueryHomeVariables,
} from '../../graphql/generated/QueryHome';
import { QUERY_HOME } from '../../graphql/queries/home';
import { initializeApollo } from '../../utils/apollo';

const apolloClient = initializeApollo();

export const useHome = async () => {
  const TODAY = new Date().toISOString().slice(0, 10);

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections },
    loading,
    error,
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: {
      date: TODAY,
    },
  });

  return {
    banners,
    newGames,
    upcomingGames,
    freeGames,
    sections,
    loading,
    error,
  };
};
