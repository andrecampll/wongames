/* eslint-disable react-hooks/rules-of-hooks */
import { useGames } from '../hooks/useGames';

import GamesTemplate, { GamesTemplateProps } from '../templates/Games';
import filterItemsMock from '../components/ExploreSidebar/mock';

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />;
}

export async function getStaticProps() {
  const { data } = await useGames();

  return {
    props: {
      revalidate: 60,
      games: data.games.map(game => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        image: game.cover ? `http://localhost:1337${game.cover.url}` : '',
        price: game.price,
      })),
      filterItems: filterItemsMock,
    },
  };
}
