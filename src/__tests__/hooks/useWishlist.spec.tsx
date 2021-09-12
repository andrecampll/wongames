import { MockedProvider } from '@apollo/client/testing';
import { renderHook } from '@testing-library/react-hooks';
import {
  useWishlist,
  WishlistProvider,
} from '../../hooks/wishlist/useWishlist';
import { wishlistMock } from '../../hooks/wishlist/mock';

describe('useWishlist', () => {
  it('should return wishlist items', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[wishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    );

    renderHook(() => useWishlist(), { wrapper });
  });
});
