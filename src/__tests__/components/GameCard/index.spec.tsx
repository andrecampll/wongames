import { screen } from '@testing-library/react';
import GameCard from '../../../components/GameCard';
import { renderWithTheme } from '../../../utils/tests/helpers';

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  image: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00',
};

describe('GameCard', () => {
  it('should be able to render correctly', () => {
    renderWithTheme(<GameCard {...props} />);

    expect(
      screen.getByRole('heading', {
        name: props.title,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: props.developer,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', {
        name: props.title,
      }),
    ).toHaveAttribute('src', props.image);

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
  });
});
