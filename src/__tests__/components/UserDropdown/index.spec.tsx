import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../../../utils/tests/helpers';

import UserDropdown from '../../../components/UserDropdown';

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="John Doe" />);

    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
  });

  it('should render the menu', () => {
    renderWithTheme(<UserDropdown username="John Doe" />);

    userEvent.click(screen.getByText('John Doe'));

    expect(
      screen.getByRole('link', { name: /my profile/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument();
  });
});
