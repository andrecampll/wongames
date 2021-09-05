import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { initializeApollo } from '../../utils/apollo';
import { QueryRecommended } from '../../graphql/generated/QueryRecommended';
import { QUERY_RECOMMENDED } from '../../graphql/queries/recommended';
import { gamesMapper, highlightMapper } from '../../utils/mappers';
import {
  QueryGames,
  QueryGamesVariables,
} from '../../graphql/generated/QueryGames';
import {
  QueryGameBySlug,
  QueryGameBySlugVariables,
} from '../../graphql/generated/QueryGameBySlug';
import { QUERY_GAMES, QUERY_GAMES_BY_SLUG } from '../../graphql/queries/games';

import Game, { GameTemplateProps } from '../../templates/Game';

import {
  QueryUpcoming,
  QueryUpcomingVariables,
} from '../../graphql/generated/QueryUpcoming';
import { QUERY_UPCOMING } from '../../graphql/queries/upcoming';

const apolloClient = initializeApollo();

export default function Index(props: GameTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return <Game {...props} />;
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 },
  });

  const paths = data.games.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: gameData } = await apolloClient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAMES_BY_SLUG,
    variables: {
      slug: `${params?.slug}`,
    },
  });

  const { data: recommendedData } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  });

  if (!gameData.games.length) {
    return {
      notFound: true,
    };
  }

  const game = gameData.games[0];

  const TODAY = new Date().toISOString().slice(0, 10);

  const { data: upcomingData } = await apolloClient.query<
    QueryUpcoming,
    QueryUpcomingVariables
  >({ query: QUERY_UPCOMING, variables: { date: TODAY } });

  return {
    props: {
      revalidate: 60,
      cover: `http://localhost:1337${game.cover?.src}`,
      gameInfo: {
        id: game.id,
        title: game.name,
        price: game.price,
        description: game.short_description,
      },
      gallery: game.gallery.map(image => ({
        src: `http://localhost:1337${image.src}`,
        label: image.label,
      })),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map(platform => platform.name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map(category => category.name),
      },
      upcomingTitle: upcomingData.showcase?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcomingData.upcomingGames),
      upcomingHighlight: highlightMapper(
        upcomingData.showcase?.upcomingGames?.highlight,
      ),
      recommendedGames: gamesMapper(recommendedData.recommended.section.games),
    },
  };
};
