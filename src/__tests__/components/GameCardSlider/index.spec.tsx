/* eslint-disable import/no-unresolved */
import '../../../../.jest/session.mock';
import { screen } from '@testing-library/react';
import 'match-media-mock';
import GameCardSlider from '../../../components/GameCardSlider';
import { render } from '../../../utils/test-utils';

import 'jest-styled-components';

const items = [
  {
    id: '1',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 235,
    promotionalPrice: 215,
  },
  {
    id: '2',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 235,
    promotionalPrice: 215,
  },
  {
    id: '3',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: 235,
    promotionalPrice: 215,
  },
  {
    id: '4',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: 235,
    promotionalPrice: 215,
  },
  {
    id: '5',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: 235,
    promotionalPrice: 215,
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
