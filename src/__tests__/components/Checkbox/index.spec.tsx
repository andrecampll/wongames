import { screen, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '../../../utils/tests/helpers';
import Checkbox from '../../../components/Checkbox';

describe('Checkbox', () => {
  it('should be able to render with a label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');
  });

  it('should not be able to render with a label', () => {
    renderWithTheme(<Checkbox />);

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument();
  });

  it('should be able to render with black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />,
    );

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517',
    });
  });

  it('should be able to dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    renderWithTheme(
      <Checkbox
        label="checkbox label"
        labelFor="check"
        labelColor="black"
        onCheck={onCheck}
      />,
    );

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it('should be able to dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    renderWithTheme(
      <Checkbox
        label="checkbox label"
        labelFor="check"
        labelColor="black"
        isChecked
        onCheck={onCheck}
      />,
    );

    userEvent.click(screen.getByRole('checkbox'));

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(false);
  });
});
