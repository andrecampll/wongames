import { Story, Meta } from '@storybook/react/types-6-0';
import BannerSlider from './index';

export default {
  title: 'BannerSlider',
  component: BannerSlider,
} as Meta;

export const Basic: Story = () => <BannerSlider />;
