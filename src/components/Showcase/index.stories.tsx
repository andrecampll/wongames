import { Story, Meta } from '@storybook/react/types-6-0';
import Showcase, { ShowcaseProps } from './index';
import highlightMock from '../Highlight/mock';
import gamesMock from '../GameCardSlider/mock';

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    Story => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Basic: Story<ShowcaseProps> = args => <Showcase {...args} />;

Basic.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock,
};

export const WithoutHighlight: Story<ShowcaseProps> = args => (
  <Showcase {...args} />
);

WithoutHighlight.args = {
  title: 'Most Popular',
  games: gamesMock,
};

export const WithoutGames: Story<ShowcaseProps> = args => (
  <Showcase {...args} />
);

WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock,
};
