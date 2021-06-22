import { screen } from '@testing-library/react';
import Logo from '../../../components/Logo';
import 'jest-styled-components';

import { renderWithTheme } from '../../../utils/tests/helpers';

describe('Logo', () => {
  it('should render the logo with id passed', () => {
    const { container } = renderWithTheme(<Logo id="myId" />);

    expect(container.querySelector('#paint0_linear_myId')).toBeInTheDocument();
  });

  it('should be able to render a white label by default', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should be able to render a black label when color is setted', () => {
    renderWithTheme(<Logo color="black" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517',
    });
  });

  it('should be able to render a normal logo when size is default', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem',
    });
  });

  it('should be able to render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem',
    });
  });

  it('should be able to render a bigger logo without text if hidOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)',
      },
    );
  });
});
