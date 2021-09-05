import { ThemeProvider } from 'styled-components';
import { CartContext, CartContextDefaultValues } from '../src/hooks/cart/useCart'
import GlobalStyles from 'styles/GlobalStyles';
import theme from '../src/styles/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme} >
      <CartContext.Provider
        value={{
          ...CartContextDefaultValues,
          ...(context?.args?.cartContextValue || {}),
          ...context.args
        }}
      >
        <GlobalStyles removeBg />
        <Story />
      </CartContext.Provider>
    </ThemeProvider>
  )
]
