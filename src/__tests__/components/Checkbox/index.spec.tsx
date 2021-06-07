import { screen } from '@testing-library/dom';
import { renderWithTheme } from '../../../utils/tests/helpers';
import Checkbox from '../../../components/Checkbox';

describe('Checkbox', () => {
  it('should be able to render', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');
  });
});
