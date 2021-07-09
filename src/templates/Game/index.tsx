/* eslint-disable jsx-a11y/aria-role */
import Base from '../Base';

import GameInfo, { GameInfoProps } from '../../components/GameInfo';

import { Cover, Main, SectionGameInfo } from './styles';

export type GameTemplateProps = {
  cover: string;
  gameInfo: GameInfoProps;
};

const Game = ({ cover, gameInfo }: GameTemplateProps) => (
  <Base>
    <Cover src={cover} role="image" aria-label="cover" />

    <Main>
      <SectionGameInfo>
        <GameInfo {...gameInfo} />
      </SectionGameInfo>
    </Main>
  </Base>
);

export default Game;
