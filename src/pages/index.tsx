import { initializeApollo } from '../utils/apollo';
import { QueryHome, QueryHomeVariables } from '../graphql/generated/QueryHome';
import { QUERY_HOME } from '../graphql/queries/home';

import Home, { HomeTemplateProps } from '../templates/Home';
import { bannerMapper, gamesMapper, highlightMapper } from '../utils/mappers';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();
  const TODAY = new Date().toISOString().slice(0, 10);

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections },
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: {
      date: TODAY,
    },
  });

  return {
    props: {
      revalidate: 10,
      banners: bannerMapper(banners),
      newGames: gamesMapper(newGames),
      newGamesTitle: sections.newGames.title,
      mostPopularHighlight: highlightMapper(sections.popularGames.highlight),
      mostPopularGames: gamesMapper(sections.popularGames.games),
      mostPopularGamesTitle: sections.popularGames.title,
      upcomingGames: gamesMapper(upcomingGames),
      upcomingGamesTitle: sections.upcomingGames.title,
      upcomingHighlight: highlightMapper(sections.upcomingGames.highlight),
      freeGamesTitle: sections.freeGames.title,
      freeGames: gamesMapper(freeGames),
      freeHighlight: highlightMapper(sections.freeGames.highlight),
    },
  };
}
