import { initializeApollo } from '../utils/apollo';
import { QueryHome } from '../graphql/generated/QueryHome';
import { QUERY_HOME } from '../graphql/queries/home';

import Home, { HomeTemplateProps } from '../templates/Home';

import highlightMock from '../components/Highlight/mock';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections },
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME });

  return {
    props: {
      revalidate: 10,
      banners: banners.map(({ image, title, subtitle, button, ribbon }) => ({
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
      })),
      newGames: newGames.map(({ name, slug, developers, cover, price }) => ({
        title: name,
        slug,
        developer: developers[0].name,
        image: cover?.url
          ? `http://localhost:1337${cover?.url}`
          : 'https://i.stack.imgur.com/y9DpT.jpg',
        price,
      })),
      newGamesTitle: sections.newGames.title,
      mostPopularHighlight: highlightMock,
      mostPopularGames: sections.popularGames.games.map(
        ({ name, slug, developers, cover, price }) => ({
          title: name,
          slug,
          developer: developers[0].name,
          image: cover?.url
            ? `http://localhost:1337${cover?.url}`
            : 'https://i.stack.imgur.com/y9DpT.jpg',
          price,
        }),
      ),
      mostPopularGamesTitle: sections.popularGames.title,
      upcomingGames: upcomingGames.map(
        ({ name, slug, developers, cover, price }) => ({
          title: name,
          slug,
          developer: developers[0].name,
          image: cover?.url
            ? `http://localhost:1337${cover?.url}`
            : 'https://i.stack.imgur.com/y9DpT.jpg',
          price,
        }),
      ),
      upcomingGamesTitle: sections.upcomingGames.title,
      upcomingHighlight: highlightMock,
      freeGamesTitle: sections.freeGames.title,
      freeGames: freeGames.map(({ name, slug, developers, cover, price }) => ({
        title: name,
        slug,
        developer: developers[0].name,
        image: cover?.url
          ? `http://localhost:1337${cover?.url}`
          : 'https://i.stack.imgur.com/y9DpT.jpg',
        price,
      })),
      freeHighlight: highlightMock,
    },
  };
}
