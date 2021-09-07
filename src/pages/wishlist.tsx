/* eslint-disable react-hooks/rules-of-hooks */
import { GetServerSidePropsContext } from 'next';
import { gamesMapper, highlightMapper } from '../utils/mappers';

import gamesMock from '../components/GameCardSlider/mock';

import Wishlist, { WishlistTemplateProps } from '../templates/Wishlist';
import { useRecommendedGames } from '../hooks/useRecommendedGames';
import protectedRoutes from '../utils/protectedUtils';

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />;
}

export async function getStaticProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);

  const { data } = await useRecommendedGames();

  return {
    props: {
      session,
      games: gamesMock,
      recommendedTitle: data.recommended.section.title,
      recommendedGames: gamesMapper(data.recommended.section.games),
      recommendedHighlight: highlightMapper(data.recommended.section.highlight),
    },
  };
}
