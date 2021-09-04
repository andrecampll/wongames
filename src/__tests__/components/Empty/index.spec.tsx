import { screen } from '@testing-library/react';
import { render } from '../../../utils/test-utils';
import Empty, { EmptyProps } from '../../../components/Empty';

const props: EmptyProps = {
  title: 'Your wishlist is empty',
  description: 'Simple description',
};

describe('Empty', () => {
  it('should be able to render', () => {
    const { container } = render(<Empty {...props} />);

    expect(
      screen.getByRole('image', {
        name: /a gamer in a couch playing videogame/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /your wishlist is empty/i }));
    expect(screen.getByText(/simple description/i)).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: /go back to store/i }),
    ).toHaveAttribute('href', '/');

    expect(container.parentElement).toMatchSnapshot();
  });

  it('should not render the link hasLink is false', () => {
    render(<Empty {...props} hasLink={false} />);

    expect(
      screen.queryByRole('link', { name: /go back to store/i }),
    ).not.toBeInTheDocument();
  });
});
