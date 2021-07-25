import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../../utils/tests/helpers';
import CartIcon from '../../../components/CartIcon';

describe('CartIcon', () => {
  it('should be able to render without badge', () => {
    renderWithTheme(<CartIcon />);

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
  });

  it('should be able to render with badge and items quantity', () => {
    renderWithTheme(<CartIcon quantity={12} />);

    expect(screen.queryByLabelText(/cart items/i)).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();
  });

  it('should render with badge only if has positive numbers', () => {
    renderWithTheme(<CartIcon quantity={-1} />);

    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/-1/)).not.toBeInTheDocument();
  });
});
