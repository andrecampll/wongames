import Menu from '../../components/Menu';
import Heading from '../../components/Heading';
import Footer from '../../components/Footer';
import BannerSlider from '../../components/BannerSlider';
import GameCardSlider from '../../components/GameCardSlider';
import Highlight, { HighlightProps } from '../../components/Highlight';

import { Container } from '../../components/Container';
import { BannerProps } from '../../components/Banner';
import { GameCardProps } from '../../components/GameCard';

import {
  SectionBanner,
  SectionNews,
  SectionFooter,
  SectionMostPopular,
  SectionUpcoming,
  SectionFreeGames,
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
      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          News
        </Heading>

        <GameCardSlider items={newGames} color="black" />
      </Container>
    </SectionNews>

    <SectionMostPopular>
      <Heading lineLeft lineColor="secondary">
        Most Popular
      </Heading>

      <Highlight {...mostPopularHighlight} />
      <GameCardSlider items={mostPopularGames} />
    </SectionMostPopular>

    <SectionUpcoming>
      <Heading lineLeft lineColor="secondary">
        Upcomming
      </Heading>

      <GameCardSlider items={upcommingGames} />
      <Highlight {...upcommingHighlight} />
      <GameCardSlider items={upcommingMoreGames} />
    </SectionUpcoming>

    <SectionFreeGames>
      <Heading lineLeft lineColor="secondary">
        Free Games
      </Heading>

      <Highlight {...freeHighlight} />
      <GameCardSlider items={freeGames} />
    </SectionFreeGames>

    <SectionFooter>
      <Container>
        <Footer />
      </Container>
    </SectionFooter>
  </section>
);

export default Home;
