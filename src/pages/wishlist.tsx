/* eslint-disable react-hooks/rules-of-hooks */
import { gamesMapper, highlightMapper } from '../utils/mappers';

import gamesMock from '../components/GameCardSlider/mock';

import Wishlist, { WishlistTemplateProps } from '../templates/Wishlist';
import { useRecommendedGames } from '../hooks/useRecommendedGames';

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />;
}

export async function getStaticProps() {
  const { data } = await useRecommendedGames();

  return {
    props: {
      games: gamesMock,
      recommendedTitle: data.recommended.section.title,
      recommendedGames: gamesMapper(data.recommended.section.games),
      recommendedHighlight: highlightMapper(data.recommended.section.highlight),
    },
  };
}
