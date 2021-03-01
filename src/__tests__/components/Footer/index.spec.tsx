import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../../utils/tests/helpers';

import Footer from '../../../components/Footer';

import 'jest-styled-components';

describe('Footer', () => {
  it('should be able to render a 4 columns by default', () => {
    const { container } = renderWithTheme(<Footer />);

    expect(
      screen.getByRole('heading', { name: /contact Us/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /follow us/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /location/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
