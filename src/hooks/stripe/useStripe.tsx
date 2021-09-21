/* eslint-disable no-return-await */
import { CartItem } from '../cart/useCart';

type PaymentIntentParams = {
  items: CartItem[];
  token: string;
};

export const useStripe = () => {
  const createPaymentIntent = async ({ items, token }: PaymentIntentParams) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/orders/create-payment-intent`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart: items }),
      },
    );

    return await response.json();
  };

  return {
    createPaymentIntent,
  };
};
