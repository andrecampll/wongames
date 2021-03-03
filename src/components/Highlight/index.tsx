import { Wrapper, Title, Subtitle, Content } from './styles';

import Button from '../Button';

export type HighlightProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttonLabel: string;
  buttonLink: string;
};

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
}: HighlightProps) => (
  <Wrapper backgroundImage={backgroundImage}>
    <Content>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>

      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </Content>
  </Wrapper>
);

export default Highlight;
