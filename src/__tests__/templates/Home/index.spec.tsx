import { screen } from '@testing-library/react';
import Home from '../../../templates/Home';
import { renderWithTheme } from '../../../utils/tests/helpers';

describe('Home', () => {
  it('should be able to render Menu and Footer', () => {
    renderWithTheme(<Home />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /contact Us/i }),
    ).toBeInTheDocument();
  });

  it('should be able to render Sections', () => {
    renderWithTheme(<Home />);

    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /most popular/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /upcoming/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /free games/i }),
    ).toBeInTheDocument();
  });
});
