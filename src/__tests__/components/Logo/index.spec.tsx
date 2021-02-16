import { screen } from '@testing-library/react';
import Logo from '../../../components/Logo';

import { renderWithTheme } from '../../../utils/tests/helpers';

describe('Logo', () => {
  it('should be able to render a white label by default', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should be able to render a black label when color is setted', () => {
    renderWithTheme(<Logo color="black" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517',
    });
  });
});
