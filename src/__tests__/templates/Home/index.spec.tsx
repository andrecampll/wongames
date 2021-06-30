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
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighlight: highlightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock,
};

jest.mock('../../../components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu" />;
    },
  };
});

jest.mock('../../../components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer" />;
    },
  };
});

jest.mock('../../../components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase" />;
    },
  };
});

jest.mock('../../../components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Banner Slider" />;
    },
  };
});

describe('<Home />', () => {
  it('should render the intire home', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Banner Slider')).toBeInTheDocument();
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(5);
  });
});
