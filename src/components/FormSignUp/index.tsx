/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/client';
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined';
import { useMutation } from '@apollo/client';
import { MUTATION_REGISTER } from '../../graphql/mutations/register';
import { UsersPermissionsRegisterInput } from '../../graphql/generated/globalTypes';

import Button from '../Button';
import TextField from '../TextField';

import { FormWrapper, FormLink } from '../Form';

const FormSignUp = () => {
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: '',
  });

  const [register, { error }] = useMutation(MUTATION_REGISTER, {
    onError: err => err,
    onCompleted: () => {
      !error &&
        signIn('credentials', {
          email: values.email,
          password: values.password,
          callbackUrl: '/',
        });
    },
  });

  const handleInput = async (field: string, value: string) => {
    setValues(s => ({ ...s, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    register({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password,
        },
      },
    });
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          placeholder="Name"
          type="name"
          onInputChange={v => handleInput('username', v)}
          icon={<AccountCircle />}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          onInputChange={v => handleInput('email', v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          onInputChange={v => handleInput('password', v)}
          icon={<Lock />}
        />
        <TextField
          name="confirm-password"
          placeholder="Confirm password"
          type="password"
          onInputChange={v => handleInput('password-confirm', v)}
          icon={<Lock />}
        />

        <Button type="submit" size="large" fullWidth>
          Sign up now
        </Button>

        <FormLink>
          Already have an account?{' '}
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
};

export default FormSignUp;
