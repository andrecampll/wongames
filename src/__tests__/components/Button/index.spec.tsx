import { render, screen } from '@testing-library/react';
import Button from '../../../components/Button';

describe('Button', () => {
  it('should be able to render', () => {
    const { container } = render(<Button />);

    expect(
      screen.getByRole('heading', {
        name: /Button/i,
      }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
