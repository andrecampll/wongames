import { initializeApollo } from '../utils/apollo';
import { QueryHome } from '../graphql/generated/QueryHome';
import { QUERY_HOME } from '../graphql/queries/home';

import Home, { HomeTemplateProps } from '../templates/Home';

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
      mostPopularHighlight: {
        title: sections.popularGames.highlight.title,
        subtitle: sections.popularGames.highlight.subtitle,
        backgroundImage: `http://localhost:1337${sections.popularGames.highlight.background.url}`,
        floatImage: `http://localhost:1337${sections.popularGames.highlight.floatImage.url}`,
        buttonLabel: sections.popularGames.highlight.buttonLabel,
        buttonLink: sections.popularGames.highlight.buttonLink,
        alignment: sections.popularGames.highlight.alignment,
      },
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
      upcomingHighlight: {
        title: sections.upcomingGames.highlight.title,
        subtitle: sections.upcomingGames.highlight.subtitle,
        backgroundImage: `http://localhost:1337${sections.upcomingGames.highlight.background.url}`,
        floatImage: `http://localhost:1337${sections.upcomingGames.highlight.floatImage.url}`,
        buttonLabel: sections.upcomingGames.highlight.buttonLabel,
        buttonLink: sections.upcomingGames.highlight.buttonLink,
        alignment: sections.upcomingGames.highlight.alignment,
      },
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
      freeHighlight: {
        title: sections.freeGames.highlight.title,
        subtitle: sections.freeGames.highlight.subtitle,
        backgroundImage: `http://localhost:1337${sections.freeGames.highlight.background.url}`,
        floatImage: `http://localhost:1337${sections.freeGames.highlight.floatImage.url}`,
        buttonLabel: sections.freeGames.highlight.buttonLabel,
        buttonLink: sections.freeGames.highlight.buttonLink,
        alignment: sections.freeGames.highlight.alignment,
      },
    },
  };
}
