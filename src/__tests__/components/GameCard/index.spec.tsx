import { screen } from '@testing-library/react';
import GameCard from '../../../components/GameCard';
import { renderWithTheme } from '../../../utils/tests/helpers';

import theme from '../../../styles/theme';

import 'jest-styled-components';

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

  it('should be able to render default price in label', () => {
    renderWithTheme(<GameCard {...props} />);

    expect(screen.getByText(props.price)).not.toHaveStyleRule(
      'text-decoration',
      'line-through',
    );

    expect(screen.getByText(props.price)).toHaveStyle({
      backgroundColor: theme.colors.secondary,
    });
  });

  it('should be able to render price promotional in label', () => {
    renderWithTheme(<GameCard promotionalPrice="R$ 100,00" {...props} />);

    expect(screen.getByText(props.price)).toHaveStyleRule(
      'text-decoration',
      'line-through',
    );

    expect(screen.getByText('R$ 100,00')).not.toHaveStyleRule(
      'text-decoration',
      'line-through',
    );
  });
});
