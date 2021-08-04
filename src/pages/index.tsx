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

  const {
    data: { banners, newGames, upcomingGames, freeGames },
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
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
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
      upcomingHighlight: highlightMock,
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
