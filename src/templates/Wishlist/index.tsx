import Base from '../Base';

import Heading from '../../components/Heading';
import Showcase from '../../components/Showcase';
import { Container } from '../../components/Container';
import { GameCardProps } from '../../components/GameCard';
import { HighlightProps } from '../../components/Highlight';

// import { Wrapper } from './styles';

export type WishlistTemplateProps = {
  recommendedGames: GameCardProps[];
  recommendedHighlist: HighlightProps;
};

const Wishlist = ({
  recommendedGames,
  recommendedHighlist,
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>
    </Container>

    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlist}
    />
  </Base>
);

export default Wishlist;
