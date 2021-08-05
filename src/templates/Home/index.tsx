import Base from '../Base';

import Showcase from '../../components/Showcase';
import BannerSlider from '../../components/BannerSlider';
import { HighlightProps } from '../../components/Highlight';

import { BannerProps } from '../../components/Banner';
import { Container } from '../../components/Container';
import { GameCardProps } from '../../components/GameCard';

import { SectionBanner, SectionNews } from './styles';

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  freeGames: GameCardProps[];
  freeHighlight: HighlightProps;
  newGamesTitle: string;
  mostPopularGamesTitle: string;
  upcomingGamesTitle: string;
  freeGamesTitle: string;
};

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighlight,
  freeGames,
  freeHighlight,
  newGamesTitle,
  freeGamesTitle,
  upcomingGamesTitle,
  mostPopularGamesTitle,
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <SectionBanner>
        <BannerSlider items={banners} />
      </SectionBanner>
    </Container>

    <SectionNews>
      <Showcase title={newGamesTitle} games={newGames} color="black" />
    </SectionNews>

    <Showcase
      title={mostPopularGamesTitle}
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <Showcase
      title={upcomingGamesTitle}
      games={upcomingGames}
      highlight={upcomingHighlight}
    />

    <Showcase
      title={freeGamesTitle}
      highlight={freeHighlight}
      games={freeGames}
    />
  </Base>
);

export default Home;
