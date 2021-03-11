import { render, screen } from '@testing-library/react';
import Home from '../../../templates/Home';

describe('Home', () => {
  it('should be able to render', () => {
    const { container } = render(<Home />);

    expect(
      screen.getByRole('heading', {
        name: /Home/i,
      }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
