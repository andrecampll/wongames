import { render, screen } from '@testing-library/react';
import Main from '../../../components/Main';

describe('Main', () => {
  it('should be able to render', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', {
        name: /Hello/i,
      }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
