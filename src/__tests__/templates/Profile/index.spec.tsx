/* eslint-disable import/no-unresolved */
import 'match-media-mock';
import { screen } from '@testing-library/react';
import { render } from '../../../utils/test-utils';

import Profile from '../../../templates/Profile';

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/profile/me' })),
}));

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  },
}));

jest.mock('components/Heading', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Heading">{children}</div>;
  },
}));

jest.mock('components/ProfileMenu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ProfileMenu" />;
  },
}));

describe('<Profile />', () => {
  it('should render sections', () => {
    render(<Profile>Lorem Ipsum</Profile>);

    expect(screen.getByText('Lorem Ipsum')).toBeInTheDocument();
    expect(screen.getByText('My profile')).toBeInTheDocument();
    expect(screen.getByTestId('Mock ProfileMenu')).toBeInTheDocument();
  });
});
