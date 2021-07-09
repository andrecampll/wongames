import Base from '../Base';

import Heading from '../../components/Heading';
import Showcase from '../../components/Showcase';
import { Container } from '../../components/Container';
import GameCard, { GameCardProps } from '../../components/GameCard';
import { HighlightProps } from '../../components/Highlight';

// import { Wrapper } from './styles';

export type WishlistTemplateProps = {
  games?: GameCardProps[];
  recommendedGames: GameCardProps[];
  recommendedHighlist: HighlightProps;
};

const Wishlist = ({
  recommendedGames,
  recommendedHighlist,
  games,
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games?.map((game, index) => (
        <GameCard key={`wishlist-game-${index}`} {...game} />
      ))}
    </Container>

    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlist}
    />
  </Base>
);

export default Wishlist;
