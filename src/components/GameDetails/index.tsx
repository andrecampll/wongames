import { Apple, Windows, Linux } from '@styled-icons/fa-brands';

import Heading from '../Heading';
import MediaMatch from '../MediaMatch';

import {
  Wrapper,
  Content,
  Label,
  Description,
  Block,
  Icon,
  IconsWrapper,
} from './styles';

type Platform = 'windows' | 'linux' | 'mac';

export type GameDetailsProps = {
  platforms: Platform[];
  developer: string;
  releaseDate: string;
};

const GameDetails = ({
  platforms,
  developer,
  releaseDate,
}: GameDetailsProps) => {
  const platformIcons = {
    linux: <Linux title="Linux" size={18} />,
    mac: <Apple title="Mac" size={18} />,
    windows: <Windows title="Windows" size={18} />,
  };

  return (
    <Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <Content>
        <Block>
          <Label>Developer</Label>
          <Description>{developer}</Description>
        </Block>

        <Block>
          <Label>Release Date</Label>
          <Description>
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            }).format(new Date(releaseDate))}
          </Description>
        </Block>

        <Block>
          <Label>Platforms</Label>
          <IconsWrapper>
            {platforms.map((icon: Platform) => (
              <Icon key={icon}>{platformIcons[icon]}</Icon>
            ))}
          </IconsWrapper>
        </Block>

        <Block>
          <Label>Publisher</Label>
          <Description>2K</Description>
        </Block>

        <Block>
          <Label>Rating</Label>
          <Description>18+</Description>
        </Block>

        <Block>
          <Label>Genres</Label>
          <Description>Action / Adventure</Description>
        </Block>
      </Content>
    </Wrapper>
  );
};

export default GameDetails;
