import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';

import {
  WishlistContext,
  WishlistContextDefaultValues,
  WishlistContextDTO,
} from '../hooks/wishlist/useWishlist';

import theme from '../styles/theme';
import {
  CartContext,
  CartContextDTO,
  CartContextDefaultValues,
} from '../hooks/cart/useCart';

type CustomRenderProps = {
  cartProviderProps?: CartContextDTO;
  wishlistProviderProps?: WishlistContextDTO;
} & Omit<RenderOptions, 'queries'>;

const customRender = (
  ui: ReactElement,
  {
    cartProviderProps = CartContextDefaultValues,
    wishlistProviderProps = WishlistContextDefaultValues,
    ...renderOptions
  }: CustomRenderProps = {},
) =>
  render(
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={cartProviderProps}>
        <WishlistContext.Provider value={wishlistProviderProps}>
          {ui}
        </WishlistContext.Provider>
      </CartContext.Provider>
    </ThemeProvider>,
    renderOptions,
  );

export * from '@testing-library/react';
export { customRender as render };
