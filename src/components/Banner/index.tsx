import Button from '../Button';
import Ribbon, { RibbonColors, RibbonSizes } from '../Ribbon';
import { Wrapper, Image, Caption, Subtitle, Title } from './styles';

export type BannerProps = {
  image: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  ribbon?: string;
  ribbonSize?: RibbonSizes;
  ribbonColor?: RibbonColors;
};

const Banner = ({
  image,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonSize = 'normal',
  ribbonColor = 'primary',
}: BannerProps) => (
  <Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
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
