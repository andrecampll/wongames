/* eslint-disable jsx-a11y/aria-role */
import Base from '../Base';

import GameInfo, { GameInfoProps } from '../../components/GameInfo';
import Gallery, { GalleryImageProps } from '../../components/Gallery';
import TextContent from '../../components/TextContent';

import {
  Cover,
  Main,
  SectionGameInfo,
  SectionGallery,
  SectionDescription,
} from './styles';

export type GameTemplateProps = {
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImageProps[];
  description: string;
};

const Game = ({ cover, gameInfo, gallery, description }: GameTemplateProps) => (
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
    </Main>
  </Base>
);

export default Game;
