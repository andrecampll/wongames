import { Story, Meta } from '@storybook/react/types-6-0';
import Heading, { HeadingProps } from './index';

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export const Basic: Story<HeadingProps> = args => <Heading {...args} />;

Basic.args = {
  children: 'Most Populars',
};
