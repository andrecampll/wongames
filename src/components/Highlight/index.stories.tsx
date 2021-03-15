import { Story, Meta } from '@storybook/react/types-6-0';
import Highlight, { HighlightProps } from '.';

import args from './mock';

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...args },
} as Meta;

export const Basic: Story<HighlightProps> = args => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
);

export const WithFloatImage: Story<HighlightProps> = args => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
);

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png',
};
