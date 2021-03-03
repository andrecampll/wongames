import { screen } from '@testing-library/react';
import Highlight from '../../../components/Highlight';

import { renderWithTheme } from '../../../utils/tests/helpers';

const props = {
  title: 'heading 1',
  subtitle: 'heading 2',
  floatImage: '/float-image.png',
  backgroundImage: '/img/red-dead-img.jpg',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2',
};

describe('Highlight', () => {
  it('should be able to render headings and button', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

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

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able to render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`,
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able to render background image', () => {
    renderWithTheme(<Highlight {...props} floatImage="/float-image.png" />);

    expect(
      screen.getByRole('img', {
        name: props.title,
      }),
    ).toHaveAttribute('src', '/float-image.png');
  });
});
