import { forwardRef } from 'react';
import SlickSlider, { Settings } from 'react-slick';
import { Wrapper } from './styles';

export type SliderSettings = Settings;

export type SliderProps = {
  children?: React.ReactNode;
  settings: SliderSettings;
};

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref,
) => {
  return (
    <Wrapper>
      <SlickSlider ref={ref} {...settings}>
        {children}
      </SlickSlider>
    </Wrapper>
  );
};

export default forwardRef(Slider);
