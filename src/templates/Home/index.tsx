import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Showcase from '../../components/Showcase';
import BannerSlider from '../../components/BannerSlider';
import { HighlightProps } from '../../components/Highlight';

import { BannerProps } from '../../components/Banner';
import { Container } from '../../components/Container';
import { GameCardProps } from '../../components/GameCard';

import {
  SectionBanner,
  SectionFooter,
  SectionUpcoming,
  SectionNews,
} from './styles';

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcommingGames: GameCardProps[];
  upcommingHighlight: HighlightProps;
  upcommingMoreGames: GameCardProps[];
  freeGames: GameCardProps[];
  freeHighlight: HighlightProps;
};

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighlight,
  upcommingMoreGames,
  freeGames,
  freeHighlight,
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />

      <SectionBanner>
        <BannerSlider items={banners} />
      </SectionBanner>
    </Container>

    <SectionNews>
      <Showcase title="News" games={newGames} />
    </SectionNews>

    <Showcase
      title="Most Popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <SectionUpcoming>
      <Showcase title="Upcomming" games={upcommingGames} />

      <Showcase highlight={upcommingHighlight} games={upcommingMoreGames} />
    </SectionUpcoming>

    <Showcase title="Free Games" highlight={freeHighlight} games={freeGames} />

    <SectionFooter>
      <Container>
        <Footer />
      </Container>
    </SectionFooter>
  </section>
);

export default Home;
