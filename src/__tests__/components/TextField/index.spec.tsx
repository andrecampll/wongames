import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Email } from '@styled-icons/material-outlined/Email';
import { render } from '../../../utils/test-utils';

import TextField from '../../../components/TextField';

describe('<TextField />', () => {
  it('Renders with Label', () => {
    render(<TextField label="Label" name="Label" />);

    expect(screen.getByLabelText('Label')).toBeInTheDocument();
  });

  it('Renders without Label', () => {
    render(<TextField />);

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument();
  });

  it('Renders with placeholder', () => {
    render(<TextField placeholder="hey you" />);

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument();
  });

  it('Changes its value when typing', async () => {
    const onInput = jest.fn();
    render(<TextField onInput={onInput} label="TextField" name="TextField" />);

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });
    expect(onInput).toHaveBeenCalledWith(text);
  });

  it('Is accessible by tab', () => {
    render(<TextField label="TextField" name="TextField" />);

    const input = screen.getByLabelText('TextField');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });

  it('Is not accessible by tab when disabled', () => {
    render(<TextField label="TextField" name="TextField" disabled />);

    const input = screen.getByLabelText('TextField');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).not.toHaveFocus();
  });

  it('Should be able to render with Icon', () => {
    render(
      <TextField
        icon={<Email data-testid="icon" />}
        label="TextField"
        name="TextField"
      />,
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('Renders with Icon on the right side', () => {
    render(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />,
    );

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 });
  });

  it('Does not changes its value when disabled', async () => {
    const onInput = jest.fn();

    render(
      <TextField
        onInput={onInput}
        label="TextField"
        name="TextField"
        disabled
      />,
    );

    const input = screen.getByRole('textbox');

    expect(input).toBeDisabled();

    const text = 'This is a text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });
    expect(onInput).not.toHaveBeenCalled();
  });

  it('Renders with error', () => {
    const { container } = render(
      <TextField
        icon={<Email data-testid="icon" />}
        label="TextField"
        error="Error message"
      />,
    );

    expect(screen.getByText('Error message')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
