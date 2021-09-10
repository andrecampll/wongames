import { screen } from '@testing-library/react';
import FormProfile from '../../../components/FormProfile';
import { render } from '../../../utils/test-utils';

describe('FormProfile', () => {
  it('should be able to render the profile form', () => {
    render(<FormProfile />);

    expect(
      screen.getByRole('heading', {
        name: /my profile/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('textbox', {
        name: /name/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('textbox', {
        name: /e-mail/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: /reset password/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: /save/i,
      }),
    ).toBeInTheDocument();
  });
});
