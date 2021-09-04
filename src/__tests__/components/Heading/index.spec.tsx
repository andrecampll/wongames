import { screen } from '@testing-library/react';
import Heading from '../../../components/Heading';
import { render } from '../../../utils/test-utils';
import 'jest-styled-components';

describe('Heading', () => {
  it('should be able to render a white heading by default', () => {
    render(<Heading>Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should be able to render a black heading when color is defined', () => {
    render(<Heading color="black">Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517',
    });
  });

  it('should be able to render a heading with a line to the left', () => {
    render(<Heading lineLeft>Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #F231A5',
    });
  });

  it('should be able to render a heading with a line at the bottom', () => {
    render(<Heading lineBottom>Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after',
      },
    );
  });

  it('should be able to render a heading with a small size', () => {
    render(<Heading size="small">Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '1.6rem',
    });

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after',
      },
    );
  });

  it('should be able to render a heading with a huge size', () => {
    render(<Heading size="huge">Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '5.2rem',
    });
  });

  it('should be able to render a heading with a primary line color', () => {
    render(
      <Heading lineColor="primary" lineLeft lineBottom>
        Won Games
      </Heading>,
    );

    const heading = screen.getByRole('heading', { name: /won games/i });

    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' });
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after',
    });
  });

  it('should be able to render a heading with a scondary line color', () => {
    render(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Won Games
      </Heading>,
    );

    const heading = screen.getByRole('heading', { name: /won games/i });

    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' });
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after',
    });
  });
});
