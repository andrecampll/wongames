/* eslint-disable jsx-a11y/aria-role */
import Base from '../Base';

import { Cover } from './styles';

const Game = () => (
  <Base>
    <Cover src="test" role="image" aria-label="cover" />
  </Base>
);

export default Game;
