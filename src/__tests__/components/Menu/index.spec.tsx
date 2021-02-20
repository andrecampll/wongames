import { screen } from '@testing-library/react';
import Menu from '../../../components/Menu';
import { renderWithTheme } from '../../../utils/tests/helpers';

describe('Menu', () => {
  it('should be able to render the menu', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument();
  });
});
