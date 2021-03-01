import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../../utils/tests/helpers';

import Banner from '../../../components/Banner';

import 'jest-styled-components';

const props = {
  image: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
};

describe('Banner', () => {
  it('should be able to render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />);

    expect(
      screen.getByRole('heading', { name: /defy death/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /defy death/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
