/* eslint-disable import/no-unresolved */
import '../../../../.jest/session.mock';
import 'match-media-mock';
import { screen } from '@testing-library/react';
import gamesMock from '../../../components/GameCardSlider/mock';
import highlightMock from '../../../components/Highlight/mock';
import { render } from '../../../utils/test-utils';

import Wishlist, { WishlistTemplateProps } from '../../../templates/Wishlist';
import { WishlistContextDefaultValues } from '../../../hooks/wishlist/useWishlist';

const props: WishlistTemplateProps = {
  recommendedGames: gamesMock,
  recommendedHighlist: highlightMock,
};

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  },
}));

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />;
  },
}));

describe('Wishlist', () => {
  it('should be able to render', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      items: [gamesMock[0]],
    };

    render(<Wishlist {...props} />, { wishlistProviderProps });

    expect(
      screen.getByRole('heading', {
        name: /Wishlist/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(/population zero/i)).toBeInTheDocument();
    expect(screen.getByTestId('Mock Showcase')).toMatchSnapshot();
  });

  it('should be able to render empty when there are no games', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      items: [],
    };

    render(
      <Wishlist
        recommendedGames={gamesMock}
        recommendedHighlist={highlightMock}
      />,
      { wishlistProviderProps },
    );

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i }),
    ).toBeInTheDocument();
  });
});
