import { screen } from '@testing-library/react';
import FormSignIn from '../../../components/FormSignIn';
import { renderWithTheme } from '../../../utils/tests/helpers';

describe('FormSignIn', () => {
  it('should be able to render the Form', () => {
    const { container } = renderWithTheme(<FormSignIn />);

    expect(screen.getByPlaceholderText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /Sign in now/i,
      }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able to render the forgot password link', () => {
    renderWithTheme(<FormSignIn />);

    expect(
      screen.getByRole('link', {
        name: /Forgot your password?/i,
      }),
    ).toBeInTheDocument();
  });

  it('should be able to render the text and link to sign up', () => {
    renderWithTheme(<FormSignIn />);

    expect(screen.getByText(/Don't have an account\?/i)).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: /Sign up/i,
      }),
    ).toBeInTheDocument();
  });
});
