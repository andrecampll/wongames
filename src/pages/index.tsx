import { initializeApollo } from '../utils/apollo';
import { QueryHome } from '../graphql/generated/QueryHome';
import { QUERY_HOME } from '../graphql/queries/home';

import Home, { HomeTemplateProps } from '../templates/Home';

import gamesMock from '../components/GameCardSlider/mock';
import highlightMock from '../components/Highlight/mock';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryHome>({ query: QUERY_HOME });

  return {
    props: {
      revalidate: 10,
      banners: data.banners.map(
        ({ image, title, subtitle, button, ribbon }) => ({
          image: `http://localhost:1337${image?.url}`,
          title,
          subtitle,
          buttonLabel: button?.label,
          buttonLink: button?.link,
          ...(ribbon && {
            ribbon: ribbon.text,
            ribbonColor: ribbon.color,
            ribbonSize: ribbon.size,
          }),
        }),
      ),
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
