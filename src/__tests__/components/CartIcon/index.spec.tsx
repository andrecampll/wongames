import { screen } from '@testing-library/react';
import { render } from '../../../utils/test-utils';
import CartIcon from '../../../components/CartIcon';
import { CartContextDefaultValues } from '../../../hooks/cart/useCart';

describe('CartIcon', () => {
  it('should be able to render without badge', () => {
    render(<CartIcon />);

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
  });

  it('should be able to render with badge and items quantity', () => {
    render(<CartIcon />, {
      cartProviderProps: {
        ...CartContextDefaultValues,
        quantity: 12,
      },
    });

    expect(screen.queryByLabelText(/cart items/i)).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();
  });
});
