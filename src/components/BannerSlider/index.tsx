import Slider, { SliderSettings } from '../Slider';
import Banner, { BannerProps } from '../Banner';
import { Wrapper } from './styles';

export type BannerSliderProps = {
  items: BannerProps[];
};

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false,
      },
    },
  ],
};

const BannerSlider = ({ items }: BannerSliderProps) => (
  <Wrapper>
    <Slider settings={settings}>
      {items.map(item => (
        <Banner key={item.title} {...item} />
      ))}
    </Slider>
  </Wrapper>
);

export default BannerSlider;
