/* eslint-disable import/no-unresolved */
import 'match-media-mock';
import { screen } from '@testing-library/react';
import gamesMock from '../../../components/GameCardSlider/mock';
import highlightMock from '../../../components/Highlight/mock';
import { renderWithTheme } from '../../../utils/tests/helpers';

import Wishlist, { WishlistTemplateProps } from '../../../templates/Wishlist';

const props: WishlistTemplateProps = {
  recommendedGames: gamesMock,
  recommendedHighlist: highlightMock,
};

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />;
  },
}));

describe('Wishlist', () => {
  it('should be able to render', () => {
    renderWithTheme(<Wishlist {...props} />);

    expect(
      screen.getByRole('heading', {
        name: /Wishlist/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByTestId('Mock Showcase')).toMatchSnapshot();
  });
});
