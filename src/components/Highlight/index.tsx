import { Wrapper, Title, Subtitle } from './styles';

import Button from '../Button';

export type HighlightProps = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
};

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
}: HighlightProps) => (
  <Wrapper>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>

    <Button as="a" href={buttonLink}>
      {buttonLabel}
    </Button>
  </Wrapper>
);

export default Highlight;
