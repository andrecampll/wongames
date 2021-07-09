/* eslint-disable jsx-a11y/aria-role */
import Base from '../Base';

import GameInfo, { GameInfoProps } from '../../components/GameInfo';
import Gallery, { GalleryImageProps } from '../../components/Gallery';
import TextContent from '../../components/TextContent';
import GameDetails, { GameDetailsProps } from '../../components/GameDetails';

import {
  Cover,
  Main,
  SectionGameInfo,
  SectionGallery,
  SectionDescription,
  SectionGameDetails,
} from './styles';

export type GameTemplateProps = {
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImageProps[];
  description: string;
  details: GameDetailsProps;
};

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
}: GameTemplateProps) => (
  <Base>
    <Cover src={cover} role="image" aria-label="cover" />

    <Main>
      <SectionGameInfo>
        <GameInfo {...gameInfo} />
      </SectionGameInfo>

      <SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </SectionGallery>

      <SectionDescription>
        <TextContent title="Description" content={description} />
      </SectionDescription>

      <SectionGameDetails>
        <GameDetails {...details} />
      </SectionGameDetails>
    </Main>
  </Base>
);

export default Game;
