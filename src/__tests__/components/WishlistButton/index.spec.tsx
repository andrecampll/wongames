/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import { WishlistContextDefaultValues } from '../../../hooks/wishlist/useWishlist';
import { render, screen } from '../../../utils/test-utils';

import { WishlistButton } from '../../../components/WishlistButton';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession');

const session = { jwt: '123', user: { email: 'lorem@ipsum.com' } };
useSession.mockImplementation(() => [session]);

describe('<WishlistButton />', () => {
  it('should render a button to add to wishlist', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false,
    };

    render(<WishlistButton id="1" />, { wishlistProviderProps });

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
  });

  it('should render a button to remove from wishlist', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true,
    };

    render(<WishlistButton id="1" />, { wishlistProviderProps });

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('should render a button with add to wishlist text', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false,
    };

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps });

    expect(screen.getByText(/add to wishlist/i)).toBeInTheDocument();
  });

  it('should render a button with add to wishlist text', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true,
    };

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps });

    expect(screen.getByText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('should render a button with add to wishlist text', () => {
    const useSession = jest.spyOn(require('next-auth/client'), 'useSession');
    useSession.mockImplementation(() => [null]);

    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true,
    };

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps });

    expect(screen.getByText(/remove from wishlist/i)).toBeInTheDocument();
  });
});
