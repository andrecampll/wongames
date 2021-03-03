import { Wrapper, Title, Subtitle, Content, FloatImage } from './styles';

import Button from '../Button';

export type HighlightProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  floatImage: string;
  buttonLabel: string;
  buttonLink: string;
};

const Highlight = ({
  title,
  subtitle,
  floatImage,
  buttonLabel,
  buttonLink,
  backgroundImage,
}: HighlightProps) => (
  <Wrapper backgroundImage={backgroundImage}>
    {!!floatImage && <FloatImage src={floatImage} alt={title} />}
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
