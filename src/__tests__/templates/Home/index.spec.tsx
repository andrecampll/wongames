/* eslint-disable import/no-unresolved */
import { screen } from '@testing-library/react';
import Home, { HomeTemplateProps } from '../../../templates/Home';
import { renderWithTheme } from '../../../utils/tests/helpers';

import bannersMock from '../../../components/BannerSlider/mock';
import gamesMock from '../../../components/GameCardSlider/mock';
import highlightMock from '../../../components/Highlight/mock';

import 'match-media-mock';

const props: HomeTemplateProps = {
  banners: bannersMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcommingGames: gamesMock,
  upcommingHighlight: highlightMock,
  upcommingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighlight: highlightMock,
};

describe('Home', () => {
  it('should be able to render Menu and Footer', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /contact Us/i }),
    ).toBeInTheDocument();
  });

  it('should be able to render Sections', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /most popular/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /upcoming/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /free games/i }),
    ).toBeInTheDocument();
  });
});
