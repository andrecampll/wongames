import { screen } from '@testing-library/react';
import { render } from '../../../utils/test-utils';
import Auth from '../../../templates/Auth';

describe('Auth', () => {
  it('should be able to render logos, title, footer and children', () => {
    render(
      <Auth title="Sign In">
        <input type="text" />
      </Auth>,
    );

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2);

    expect(
      screen.getByRole('heading', {
        name: /all your favorite games in one place/i,
      }),
    );

    expect(
      screen.getByRole('heading', {
        name: /WON is the best and most complete gaming platform/i,
      }),
    );

    expect(
      screen.getByRole('heading', {
        name: /sign in/i,
      }),
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
