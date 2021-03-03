import { screen } from '@testing-library/react';
import Highlight from '../../../components/Highlight';

import { renderWithTheme } from '../../../utils/tests/helpers';

const props = {
  title: 'heading 1',
  subtitle: 'heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2',
};

describe('Highlight', () => {
  it('should be able to render headings and button', () => {
    renderWithTheme(<Highlight {...props} />);

    expect(
      screen.getByRole('heading', {
        name: /heading 1/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /heading 2/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', {
        name: /buy now/i,
      }),
    ).toBeInTheDocument();
  });
});
