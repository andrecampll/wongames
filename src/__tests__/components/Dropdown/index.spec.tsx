/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../../utils/test-utils';
import Dropdown from '../../../components/Dropdown';

describe('Dropdown', () => {
  beforeEach(() => {
    const title = <h1 aria-label="toggle dropdown">Click here</h1>;

    render(
      <Dropdown title={title}>
        <span>content</span>
      </Dropdown>,
    );
  });

  it('should be able to render title', () => {
    expect(screen.getByLabelText('toggle dropdown'));
  });

  it('should be able to handle open close dropdown', () => {
    const content = screen.getByText(/content/).parentElement;

    expect(content).toHaveStyle({ opacity: 0 });
    expect(content.getAttribute('aria-hidden')).toBe('true');

    userEvent.click(screen.getByLabelText(/toggle dropdown/i));

    expect(content).toHaveStyle({ opacity: 1 });
    expect(content.getAttribute('aria-hidden')).toBe('false');
  });

  it('should handle open/close dropdown when clicking on overlay', () => {
    const content = screen.getByText(/content/).parentElement!;
    const overlay = content.nextElementSibling;

    userEvent.click(screen.getByLabelText(/toogle dropdown/));

    expect(overlay).toHaveStyle({ opacity: 1 });
    expect(overlay!.getAttribute('aria-hidden')).toBe('false');

    userEvent.click(overlay!);

    expect(overlay).toHaveStyle({ opacity: 0 });
    expect(overlay!.getAttribute('aria-hidden')).toBe('true');
  });
});
