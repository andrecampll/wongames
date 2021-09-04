/* eslint-disable import/no-unresolved */
import 'match-media-mock';
import { fireEvent, screen } from '@testing-library/react';
import { render } from '../../../utils/test-utils';

import items from '../../../components/Gallery/mock';
import Gallery from '../../../components/Gallery';

describe('<Gallery />', () => {
  it('should be able to render thumbnails as buttons', () => {
    render(<Gallery items={items.slice(0, 2)} />);

    expect(
      screen.getByRole('button', { name: /thumb - gallery image 1/i }),
    ).toHaveAttribute('src', items[0].src);

    expect(
      screen.getByRole('button', { name: /thumb - gallery image 2/i }),
    ).toHaveAttribute('src', items[1].src);
  });

  it('should be able to render open modal when the user click at the modal', () => {
    render(<Gallery items={items.slice(0, 2)} />);

    const modal = screen.getByLabelText('modal');

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' });

    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 1/i }),
    );
    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveStyle({ opacity: 1 });
  });

  it('should be able to open modal with selected image', async () => {
    render(<Gallery items={items.slice(0, 2)} />);

    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 2/i }),
    );

    const img = await screen.findByRole('img', { name: /gallery image 2/i });
    expect(img.parentElement?.parentElement).toHaveClass('slick-active');
  });

  it('should be able to render close modal when overlay or button clicked', () => {
    render(<Gallery items={items.slice(0, 2)} />);

    const modal = screen.getByLabelText('modal');

    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 1/i }),
    );

    fireEvent.click(screen.getByRole('button', { name: /close modal/i }));

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0 });
  });

  it('should be able to render close modal when overlay or button clicked', () => {
    const { container } = render(<Gallery items={items.slice(0, 2)} />);

    const modal = screen.getByLabelText('modal');

    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 1/i }),
    );

    fireEvent.keyUp(container, { key: 'Escape' });

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0 });
  });
});
