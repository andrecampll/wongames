import { fireEvent, screen } from '@testing-library/react';
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

  it('should be able to render a filled Favorite icon when favorite is trues', () => {
    renderWithTheme(<GameCard favorite {...props} />);

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('should be able to call onFav method when favorite is clicked', () => {
    const onFav = jest.fn();

    renderWithTheme(<GameCard favorite onFav={onFav} {...props} />);

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(onFav).toBeCalled();
  });

  it('should be able to render a Ribbon', () => {
    renderWithTheme(
      <GameCard
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
        {...props}
      />,
    );

    const ribbon = screen.getByText(/my ribbon/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' });
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem',
    });
  });
});
