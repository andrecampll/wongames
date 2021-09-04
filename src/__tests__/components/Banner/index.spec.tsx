import { screen } from '@testing-library/react';
import { render } from '../../../utils/test-utils';

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
    const { container } = render(<Banner {...props} />);

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

  it('should be able to render a Ribbon', () => {
    render(
      <Banner
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
        {...props}
      />,
    );

    const ribbon = screen.getByText(/my ribbon/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' });
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem',
    });
  });
});
