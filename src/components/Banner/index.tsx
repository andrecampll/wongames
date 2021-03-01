import Button from '../Button';
import { Wrapper, Image, Caption, Subtitle, Title } from './styles';

export type BannerProps = {
  image: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
};

const Banner = ({
  image,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
}: BannerProps) => (
  <Wrapper>
    <Image src={image} role="img" aria-label={title} />

    <Caption>
      <Title>{title}</Title>
      <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </Caption>
  </Wrapper>
);

export default Banner;
