import { screen } from '@testing-library/react';
import { render } from '../../../utils/test-utils';

import Footer from '../../../components/Footer';

import 'jest-styled-components';

describe('Footer', () => {
  it('should be able to render a 4 columns by default', () => {
    const { container } = render(<Footer />);

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
