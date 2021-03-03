import { Story, Meta } from '@storybook/react/types-6-0';
import Banner, { BannerProps } from './index';

export default {
  title: 'Banner',
  component: Banner,
  argTypes: {
    ribbon: {
      type: 'string',
    },
  },
  args: {
    image: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Basic: Story<BannerProps> = args => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
);

export const WithRibbon: Story<BannerProps> = args => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
);

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary',
};
