import { screen } from '@testing-library/react';
import items from '../../../components/CartList/mock';
import { render } from '../../../utils/test-utils';

import CartDropdown from '../../../components/CartDropdown';

describe('CartDropdown', () => {
  it('should be able to render with badge', () => {
    render(<CartDropdown items={items} total="R$ 300,00" />);

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument();
  });

  it('should render Dropdown content with cart items and total', () => {
    render(<CartDropdown items={items} total="R$ 300,00" />);

    expect(screen.getByText('R$ 300,00')).toBeInTheDocument();
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument();
  });
});
