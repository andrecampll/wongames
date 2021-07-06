import { Story, Meta } from '@storybook/react/types-6-0';
import Gallery, { GalleryImageProps } from './index';
import items from './mock';

export default {
  title: 'Gallery',
  component: Gallery,
  args: {
    items,
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Basic: Story<GalleryImageProps> = args => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Gallery items={items} {...args} />
  </div>
);
