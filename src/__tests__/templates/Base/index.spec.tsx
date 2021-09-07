import { screen } from '@testing-library/react';
import Base from '../../../templates/Base';
import { render } from '../../../utils/test-utils';

jest.mock('next-auth/client', () => ({
  useSession: jest.fn(() => {
    return [{ session: null }];
  }),
}));

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

describe('<Base />', () => {
  it('should render menu, footer and children', () => {
    render(
      <Base>
        <h1>Hello World</h1>
      </Base>,
    );

    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /hello world/i,
      }),
    ).toBeInTheDocument();
  });
});
