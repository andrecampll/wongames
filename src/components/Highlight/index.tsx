import { Wrapper, Title, Subtitle, Content, FloatImage } from './styles';

import Button from '../Button';

export type HighlightProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  floatImage: string;
  buttonLabel: string;
  buttonLink: string;
  alignment?: 'right' | 'left';
};

const Highlight = ({
  title,
  subtitle,
  floatImage,
  buttonLabel,
  buttonLink,
  backgroundImage,
  alignment = 'right',
}: HighlightProps) => (
  <Wrapper backgroundImage={backgroundImage} alignment={alignment}>
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
