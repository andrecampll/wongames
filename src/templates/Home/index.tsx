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
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <SectionBanner>
        <BannerSlider items={banners} />
      </SectionBanner>
    </Container>

    <SectionNews>
      <Showcase title="News" games={newGames} color="black" />
    </SectionNews>

    <Showcase
      title="Most Popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <Showcase
      title="Upcoming"
      games={upcomingGames}
      highlight={upcomingHighlight}
    />

    <Showcase title="Free Games" highlight={freeHighlight} games={freeGames} />
  </Base>
);

export default Home;
