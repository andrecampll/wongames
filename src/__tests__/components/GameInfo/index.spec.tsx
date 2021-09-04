import { screen } from '@testing-library/react';
import { render } from '../../../utils/test-utils';
import GameInfo from '../../../components/GameInfo';

const props = {
  title: 'My Game',
  description: 'Game description',
  price: 210,
};

describe('GameInfo', () => {
  it('should be able to render game information', () => {
    const { container } = render(<GameInfo {...props} />);

    expect(
      screen.getByRole('heading', {
        name: /my game/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(/game description/i)).toBeInTheDocument();
    expect(screen.getByText(/\$210\.00/)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able to render', () => {
    render(<GameInfo {...props} />);

    expect(
      screen.getByRole('button', {
        name: /add to cart/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: /wishlist/i,
      }),
    ).toBeInTheDocument();
  });
});
