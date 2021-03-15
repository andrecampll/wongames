/* eslint-disable import/no-unresolved */
import 'match-media-mock';
import { screen } from '@testing-library/react';

import bannerMock from '../../../components/BannerSlider/mock';
import gamesMock from '../../../components/GameCardSlider/mock';
import highlightMock from '../../../components/Highlight/mock';
import { renderWithTheme } from '../../../utils/tests/helpers';

import Home from '../../../templates/Home';

const props = {
  banners: bannerMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcommingGames: gamesMock,
  upcommingHighlight: highlightMock,
  upcommingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighlight: highlightMock,
};

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /follow us/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2);
  });

  it('should render sections', () => {
    renderWithTheme(<Home {...props} />);
    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /most popular/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /upcomming/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /free games/i }),
    ).toBeInTheDocument();
  });

  it('should render section elements', () => {
    renderWithTheme(<Home {...props} />);
    // banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1);
    // card game ( 5 sections com 4 cards cada = 5x4 = 20)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(20);
    // highlight
    expect(screen.getAllByText(/read dead is back!/i)).toHaveLength(3);
  });
});
