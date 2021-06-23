import { Email, Lock } from 'styled-icons/material-outlined';
import Link from 'next/link';
import Button from '../Button';
import TextField from '../TextField';
import { Wrapper, ForgotPassword, FormLink } from './styles';

const FormSignIn = () => (
  <Wrapper>
    <form>
      <TextField
        name="email"
        placeholder="E-mail"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <ForgotPassword href="#">
        <a>Forgot your password?</a>
      </ForgotPassword>

      <Button size="large" fullWidth>
        Sign in now
      </Button>

      <FormLink>
        Don&apos;t have an account?{' '}
        <Link href="/sign-up">
          <a>Sign up</a>
        </Link>
      </FormLink>
    </form>
  </Wrapper>
);

export default FormSignIn;
