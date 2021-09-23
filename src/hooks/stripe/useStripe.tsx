/* eslint-disable no-return-await */
import { PaymentIntent } from '@stripe/stripe-js';
import { CartItem } from '../cart/useCart';

type PaymentIntentParams = {
  items: CartItem[];
  token: string;
};

type FetchParams = {
  url: string;
  body: string;
  token: string;
};

type CreatePaymentParams = {
  items: CartItem[];
  paymentIntent?: PaymentIntent;
  token: string;
};

export const useStripe = () => {
  const fetcher = async ({ url, body, token }: FetchParams) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body,
    });

    return await response.json();
  };

  const createPaymentIntent = async ({ items, token }: PaymentIntentParams) => {
    return fetcher({
      url: '/orders/create-payment-intent',
      body: JSON.stringify({ cart: items }),
      token,
    });
  };

  const createPayment = ({
    items,
    token,
    paymentIntent,
  }: CreatePaymentParams) => {
    return fetcher({
      url: '/orders',
      body: JSON.stringify({
        cart: items,
        paymentIntentId: paymentIntent?.id,
        paymentMethod: paymentIntent?.payment_method,
      }),
      token,
    });
  };

  return {
    createPaymentIntent,
    createPayment,
  };
};
