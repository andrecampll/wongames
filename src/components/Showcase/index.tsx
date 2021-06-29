import Heading from '../Heading';
import Highlight, { HighlightProps } from '../Highlight';
import GameCardSlider from '../GameCardSlider';
import { GameCardProps } from '../GameCard';

import { Wrapper } from './styles';

export type ShowcaseProps = {
  title?: string;
  highlight?: HighlightProps;
  games?: GameCardProps[];
};

const Showcase = ({ title, highlight, games }: ShowcaseProps) => (
  <Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}

    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} />}
  </Wrapper>
);

export default Showcase;
