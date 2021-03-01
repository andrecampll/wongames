import { Story, Meta } from '@storybook/react/types-6-0';
import Banner, { BannerProps } from './index';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
  },
} as Meta;

export const Basic: Story<BannerProps> = args => <Banner {...args} />;
