import gamesMock from '../components/GameCardSlider/mock';
import highlightMock from '../components/Highlight/mock';

import Wishlist, { WishlistTemplateProps } from '../templates/Wishlist';

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />;
}

export async function getStaticProps() {
  return {
    props: {
      games: gamesMock,
      recommendedGames: gamesMock.slice(0, 5),
      recommendedHighlight: highlightMock,
    },
  };
}
