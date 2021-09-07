import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../../utils/test-utils';

import UserDropdown from '../../../components/UserDropdown';

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="John Doe" />);

    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
  });

  it('should render the menu', () => {
    render(<UserDropdown username="John Doe" />);

    userEvent.click(screen.getByText('John Doe'));

    expect(
      screen.getByRole('link', { name: /my profile/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /sign out/i }),
    ).toBeInTheDocument();
  });
});
