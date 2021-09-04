import { screen } from '@testing-library/react';
import Logo from '../../../components/Logo';
import 'jest-styled-components';

import { render } from '../../../utils/test-utils';

describe('Logo', () => {
  it('should render the logo with id passed', () => {
    const { container } = render(<Logo id="myId" />);

    expect(container.querySelector('#paint0_linear_myId')).toBeInTheDocument();
  });

  it('should be able to render a white label by default', () => {
    render(<Logo />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should be able to render a black label when color is setted', () => {
    render(<Logo color="black" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517',
    });
  });

  it('should be able to render a normal logo when size is default', () => {
    render(<Logo />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem',
    });
  });

  it('should be able to render a bigger logo', () => {
    render(<Logo size="large" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem',
    });
  });

  it('should be able to render a bigger logo without text if hidOnMobile', () => {
    render(<Logo hideOnMobile />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)',
      },
    );
  });
});
