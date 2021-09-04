import { screen, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { render } from '../../../utils/test-utils';
import Radio from '../../../components/Radio';

describe('Radio', () => {
  it('should be able to render with a label', () => {
    render(<Radio label="radio label" labelFor="check" />);

    expect(screen.getByRole('radio')).toBeInTheDocument();
    expect(screen.getByLabelText(/radio label/i)).toBeInTheDocument();
    expect(screen.getByText(/radio label/i)).toHaveAttribute('for', 'check');
  });

  it('should not be able to render with a label', () => {
    render(<Radio />);

    expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument();
  });

  it('should be able to render with black label', () => {
    render(<Radio label="radio label" labelFor="check" labelColor="black" />);

    expect(screen.getByText(/radio label/i)).toHaveStyle({
      color: '#030517',
    });
  });

  it('should be able to dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    render(
      <Radio
        label="radio label"
        labelFor="check"
        labelColor="black"
        onCheck={onCheck}
        value="any-value"
      />,
    );

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('radio'));

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith('any-value');
  });

  it('should be able to focus in Radio', async () => {
    render(<Radio label="radio label" labelFor="check" />);

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(screen.getByLabelText(/radio/i)).toHaveFocus();
  });
});
