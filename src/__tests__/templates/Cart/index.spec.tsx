/* eslint-disable import/no-unresolved */
import 'match-media-mock';
import { screen } from '@testing-library/react';

import gamesMock from '../../../components/GameCardSlider/mock';
import highlightMock from '../../../components/Highlight/mock';
import itemsMock from '../../../components/CartList/mock';
import cardsMock from '../../../components/PaymentOptions/mock';
import { render } from '../../../utils/test-utils';

import Cart from '../../../templates/Cart';

const props = {
  items: itemsMock,
  total: '$ 430,00',
  cards: cardsMock,
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock,
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

jest.mock('components/CartList', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Cart" />;
  },
}));

jest.mock('components/PaymentOptions', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock PaymentOptions" />;
  },
}));

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />;
  },
}));

describe('<Cart />', () => {
  it('should render sections', () => {
    render(<Cart {...props} />);

    expect(
      screen.getByRole('heading', { name: /my cart/i }),
    ).toBeInTheDocument();
    expect(screen.getByTestId('Mock Cart')).toBeInTheDocument();
    expect(screen.getByTestId('Mock PaymentOptions')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument();
    expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument();
  });

  it('should render empty section if there are no items', () => {
    render(<Cart {...props} items={[]} />);

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument();
  });
});
