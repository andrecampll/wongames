/* eslint-disable import/no-unresolved */
import { screen } from '@testing-library/react';
import 'match-media-mock';
import GameCardSlider from '../../../components/GameCardSlider';
import { render } from '../../../utils/test-utils';

import 'jest-styled-components';

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00',
  },
];

describe('GameCardSlider', () => {
  it('should be able to render 4 active items', () => {
    const { container } = render(<GameCardSlider items={items} />);

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4);
  });

  it('should be able to render white arrows if color is passed', () => {
    render(<GameCardSlider items={items} color="white" />);

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA',
    });

    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA',
    });
  });
});
