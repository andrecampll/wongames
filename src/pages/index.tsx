import { gql } from '@apollo/client';
import Home, { HomeTemplateProps } from '../templates/Home';
import { initializeApollo } from '../utils/apollo';

import bannersMock from '../components/BannerSlider/mock';
import gamesMock from '../components/GameCardSlider/mock';
import highlightMock from '../components/Highlight/mock';

const GET_GAMES = gql`
  query getGames {
    games {
      name
    }
  }
`;

export default function Index(props: HomeTemplateProps) {
  const { data } = props;

  if (data) return <p>{JSON.stringify(data, null, 2)}</p>;

  return <Home {...props} />;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({ query: GET_GAMES });

  return {
    props: {
      data,
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock,
    },
  };
}
