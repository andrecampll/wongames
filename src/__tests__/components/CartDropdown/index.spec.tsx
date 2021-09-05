import { render, screen } from '../../../utils/test-utils';
import { CartContextDefaultValues } from '../../../hooks/cart/useCart';
import items from '../../../components/CartList/mock';

import CartDropdown from '../../../components/CartDropdown';

describe('CartDropdown', () => {
  beforeEach(() => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items,
      quantity: items.length,
      total: 'R$ 300,00',
    };

    render(<CartDropdown />, {
      cartProviderProps,
    });
  });

  it('should be able to render with badge', () => {
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument();
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
  });

  it('should render Dropdown content with cart items and total', () => {
    expect(screen.getByText('R$ 300,00')).toBeInTheDocument();
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument();
  });
});
