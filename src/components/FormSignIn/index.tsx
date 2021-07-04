import { Email, Lock } from '@styled-icons/material-outlined';
import Link from 'next/link';
import Button from '../Button';
import TextField from '../TextField';
import { FormWrapper, FormLink } from '../Form';
import { ForgotPassword } from './styles';

const FormSignIn = () => (
  <FormWrapper>
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

      <ForgotPassword href="#">Forgot your password?</ForgotPassword>

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
  </FormWrapper>
);

export default FormSignIn;
