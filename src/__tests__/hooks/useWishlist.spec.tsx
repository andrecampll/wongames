import { MockedProvider } from '@apollo/client/testing';
import { renderHook } from '@testing-library/react-hooks';
import { act, waitFor } from '../../utils/test-utils';
import {
  useWishlist,
  WishlistProvider,
} from '../../hooks/wishlist/useWishlist';
import {
  wishlistMock,
  wishlistItems,
  createWishlistMock,
  removeWishlistMock,
  updateWishlistMock,
} from '../../hooks/wishlist/mock';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession');

const session = { jwt: '123', user: { email: 'lorem@ipsum.com' } };
useSession.mockImplementation(() => [session]);

describe('useWishlist', () => {
  it('should return wishlist items', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[wishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper,
    });

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.items).toStrictEqual([
      wishlistItems[0],
      wishlistItems[1],
    ]);
  });

  it('should check if the game is in the wishlist', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[wishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper,
    });

    await waitForNextUpdate();

    expect(result.current.isInWishlist('1')).toBe(true);
    expect(result.current.isInWishlist('2')).toBe(true);
  });

  it('should add item in wishlist creating a new list', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[createWishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper,
    });

    act(() => {
      result.current.addToWishlist('3');
    });

    await waitForNextUpdate();
    expect(result.current.items).toStrictEqual([wishlistItems[2]]);
  });

  it('should add item in wishlist updating the current list', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[wishlistMock, updateWishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper,
    });

    await waitForNextUpdate();

    act(() => {
      result.current.addToWishlist('3');
    });

    await waitFor(() => {
      expect(result.current.items).toStrictEqual(wishlistItems);
    });
  });

  it('should remove item from wishlist', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[wishlistMock, removeWishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper,
    });

    await waitForNextUpdate();

    act(() => {
      result.current.removeFromWishlist('1');
    });

    await waitFor(() => {
      expect(result.current.items).toStrictEqual([wishlistItems[1]]);
    });
  });
});
