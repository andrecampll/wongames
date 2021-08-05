/* eslint-disable react-hooks/rules-of-hooks */
import Home, { HomeTemplateProps } from '../templates/Home';
import { bannerMapper, gamesMapper, highlightMapper } from '../utils/mappers';
import { useHome } from '../hooks/pages/useHome';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export async function getServerSideProps() {
  const {
    banners,
    newGames,
    sections,
    upcomingGames,
    freeGames,
  } = await useHome();

  return {
    props: {
      revalidate: 10,
      banners: bannerMapper(banners),
      newGames: gamesMapper(newGames),
      newGamesTitle: sections.newGames.title,
      mostPopularHighlight: highlightMapper(sections.popularGames.highlight),
      mostPopularGames: gamesMapper(sections.popularGames.games),
      mostPopularGamesTitle: sections.popularGames.title,
      upcomingGames: gamesMapper(upcomingGames),
      upcomingGamesTitle: sections.upcomingGames.title,
      upcomingHighlight: highlightMapper(sections.upcomingGames.highlight),
      freeGamesTitle: sections.freeGames.title,
      freeGames: gamesMapper(freeGames),
      freeHighlight: highlightMapper(sections.freeGames.highlight),
    },
  };
}
