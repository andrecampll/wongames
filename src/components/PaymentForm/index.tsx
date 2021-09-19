import {
  useState,
  // useEffect
} from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { StripeCardElementChangeEvent } from '@stripe/stripe-js';
import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined';
// import { useCart } from '../../hooks/cart/useCart';

import Button from '../Button';
import Heading from '../Heading';

import { Wrapper, Body, Footer, Error } from './styles';

const PaymentForm = () => {
  // const { items } = useCart();
  const [error, setError] = useState<string | null>(null);
  const [disabled, setDisabled] = useState(true);
  // const [clientSecret, setClientSecret] = useState('');
  // const [freeGames, setFreeGames] = useState(false);

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  // useEffect(() => {
  //   if (items.length) {

  //   }
  // }, [items]);

  return (
    <Wrapper>
      <Body>
        <Heading lineBottom color="black" size="small">
          Payment
        </Heading>

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
          icon={<ShoppingCart />}
          disabled={disabled || !!error}
        >
          Buy now
        </Button>
      </Footer>
    </Wrapper>
  );
};

export default PaymentForm;
