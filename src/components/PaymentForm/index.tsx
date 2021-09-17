import { ShoppingCart } from '@styled-icons/material-outlined';

import Button from '../Button';
import Heading from '../Heading';

import { Wrapper, Body, Footer } from './styles';

const PaymentForm = () => {
  return (
    <Wrapper>
      <Body>
        <Heading lineBottom color="black" size="small">
          Payment
        </Heading>
      </Body>

      <Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button fullWidth icon={<ShoppingCart />}>
          Buy now
        </Button>
      </Footer>
    </Wrapper>
  );
};

export default PaymentForm;
