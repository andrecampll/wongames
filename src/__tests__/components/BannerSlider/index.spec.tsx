import { render, screen } from '@testing-library/react';
import BannerSlider from '../../../components/BannerSlider';

describe('BannerSlider', () => {
  it('should be able to render', () => {
    const { container } = render(<BannerSlider />);

    expect(
      screen.getByRole('heading', {
        name: /BannerSlider/i,
      }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
