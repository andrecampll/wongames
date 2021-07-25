import { fireEvent, screen } from '@testing-library/react';
import Menu from '../../../components/Menu';
import { renderWithTheme } from '../../../utils/tests/helpers';

describe('Menu', () => {
  it('should be able to render the menu', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument();
  });

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />);

    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });

    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyle({ opacity: 1 });

    fireEvent.click(screen.getByLabelText(/close menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });

  it('should show box when logged out', () => {
    renderWithTheme(<Menu />);

    expect(screen.queryAllByText(/my profile/i)).toHaveLength(0);
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument();

    expect(screen.getByText(/log in now/i)).toBeInTheDocument();
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
  });

  it('should show wishlist when logged in', () => {
    renderWithTheme(<Menu username="johndoe" />);

    expect(screen.getAllByText(/my profile/i)).toHaveLength(2);
    expect(screen.getAllByText(/wishlist/i)).toHaveLength(2);

    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();
  });
});
