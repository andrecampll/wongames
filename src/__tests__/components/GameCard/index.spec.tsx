import { fireEvent, screen } from '@testing-library/react';
import GameCard from '../../../components/GameCard';
import { render } from '../../../utils/test-utils';

import theme from '../../../styles/theme';

import 'jest-styled-components';

const props = {
  id: '1',
  slug: 'population-zero',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  image: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 235,
};

describe('GameCard', () => {
  it('should be able to render correctly', () => {
    const { container } = render(<GameCard {...props} />);

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

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`,
    );

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able to render default price in label', () => {
    render(<GameCard {...props} />);

    expect(screen.getByText('$235.00')).not.toHaveStyleRule(
      'text-decoration',
      'line-through',
    );

    expect(screen.getByText('$235.00')).toHaveStyle({
      backgroundColor: theme.colors.secondary,
    });
  });

  it('should be able to render FREE when the price is 0', () => {
    render(<GameCard {...props} price={0} />);

    expect(screen.getByText(/free/i)).toBeInTheDocument();
  });

  it('should be able to render price promotional in label', () => {
    render(<GameCard promotionalPrice={100} {...props} />);

    expect(screen.getByText('$235.00')).toHaveStyleRule(
      'text-decoration',
      'line-through',
    );

    expect(screen.getByText('$100.00')).not.toHaveStyleRule(
      'text-decoration',
      'line-through',
    );
  });

  it('should be able to render a filled Favorite icon when favorite is trues', () => {
    render(<GameCard favorite {...props} />);

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('should be able to call onFav method when favorite is clicked', () => {
    const onFav = jest.fn();

    render(<GameCard favorite onFav={onFav} {...props} />);

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(onFav).toBeCalled();
  });

  it('should be able to render a Ribbon', () => {
    render(
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
