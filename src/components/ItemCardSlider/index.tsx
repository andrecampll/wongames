import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos';

import { Wrapper } from './styles';
import Slider, { SliderSettings } from '../Slider';
import { ItemCard, ItemCardProps } from '../ItemCard';

export type ItemCardSliderProps = {
  items: ItemCardProps[];
  color?: 'white' | 'black';
};

const settings: SliderSettings = {
  nextArrow: <ArrowRight aria-label="next games" />,
  prevArrow: <ArrowLeft aria-label="previous games" />,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1,
      },
    },
  ],
};

export const ItemCardSlider = ({
  items,
  color = 'black',
}: ItemCardSliderProps) => (
  <Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <ItemCard key={index} {...item} />
      ))}
    </Slider>
  </Wrapper>
);
