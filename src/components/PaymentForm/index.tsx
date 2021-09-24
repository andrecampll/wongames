import { useState, useEffect, FormEvent } from 'react';
import { Session } from 'next-auth';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { PaymentIntent, StripeCardElementChangeEvent } from '@stripe/stripe-js';
import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined';
import { useRouter } from 'next/router';
import { useCart } from '../../hooks/cart/useCart';
import { useStripe as useLocalStripe } from '../../hooks/stripe/useStripe';

import { FormLoading } from '../Form';
import Button from '../Button';
import Heading from '../Heading';

import { Wrapper, Body, Footer, Error, FreeGames } from './styles';

type PaymentFormProps = {
  session: Session;
};

const PaymentForm = ({ session }: PaymentFormProps) => {
  const { items } = useCart();
  const stripe = useStripe();
  const elements = useElements();
  const { push } = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const [freeGames, setFreeGames] = useState(false);
  const { createPayment, createPaymentIntent } = useLocalStripe();

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length) {
        const data = await createPaymentIntent({
          items,
          token: session.jwt as string,
        });

        if (data.freeGames) {
          setFreeGames(true);
          return;
        }

        if (data.error) {
          setError(data.error);
        } else {
          // senão o paymentIntent foi válido
          // setClientSecret
          setFreeGames(false);
          setClientSecret(data.client_secret);
        }
      }
    }

    setPaymentMode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, session.jwt]);

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  const saveOrder = async (paymentIntent?: PaymentIntent) => {
    const data = await createPayment({
      items,
      paymentIntent,
      token: session.jwt as string,
    });

    return data;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    if (freeGames) {
      saveOrder();
      push('/success');
      return;
    }

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setLoading(false);
    } else {
      setError(null);
      setLoading(false);
      saveOrder(payload.paymentIntent);
      push('/success');
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Body>
          <Heading lineBottom color="black" size="small">
            Payment
          </Heading>

          {freeGames ? (
            <FreeGames>Only free games, click buy and enjoy!</FreeGames>
          ) : (
            <CardElement
              options={{
                hidePostalCode: true,
                style: {
                  base: {
                    fontSize: '16px',
                  },
                },
              }}
              onChange={handleChange}
            />
          )}

          {error && (
            <Error>
              <ErrorOutline size={20} />
              {error}
            </Error>
          )}
        </Body>

        <Footer>
          <Button as="a" fullWidth minimal>
            Continue shopping
          </Button>
          <Button
            fullWidth
            icon={loading ? <FormLoading /> : <ShoppingCart />}
            disabled={!freeGames && (disabled || !!error)}
          >
            Buy now
          </Button>
        </Footer>
      </form>
    </Wrapper>
  );
};

export default PaymentForm;
