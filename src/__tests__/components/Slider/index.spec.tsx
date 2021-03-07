/* eslint-disable import/no-unresolved */
import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../../utils/tests/helpers';

import Slider from '../../../components/Slider';

import 'jest-styled-components';

describe('Slider', () => {
  it('should be able to render children as slider item', () => {
    const { container } = renderWithTheme(
      <Slider settings={{ slidesToScroll: 1, infinite: false }}>
        <p>Item 1</p>
        <p>Item 2</p>
      </Slider>,
    );

    expect(
      screen.getByText(/item 1/i).parentElement?.parentElement,
    ).toHaveClass('slick-slide');

    expect(
      screen.getByText(/item 2/i).parentElement?.parentElement,
    ).toHaveClass('slick-slide');

    expect(container.firstChild).toMatchSnapshot();
  });
});
