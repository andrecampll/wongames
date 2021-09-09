import React, { useState } from 'react';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';

import { Lock, ErrorOutline } from '@styled-icons/material-outlined';

import Button from '../Button';
import TextField from '../TextField';
import { FormWrapper, FormLoading, FormError } from '../Form';

import { FieldErrors } from '../../utils/validations';

const FormResetPassword = () => {
  const [formError, setFormError] = useState('');
  const [fieldError, setFieldError] = useState<FieldErrors>({});
  const [values, setValues] = useState({ password: '', confirm_password: '' });
  const [loading, setLoading] = useState(false);
  const { push, query } = useRouter();

  const handleInput = (field: string, value: string) => {
    setValues(s => ({ ...s, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const errors = {};

    if (Object.keys(errors).length) {
      setFieldError(errors);
      setLoading(false);
      return;
    }

    setFieldError({});

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`,
    });

    if (result?.url) {
      return push(result?.url);
    }

    setLoading(false);

    setFormError('username or password is invalid');
  };

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={fieldError?.password}
          onInputChange={v => handleInput('password', v)}
          icon={<Lock />}
        />
        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          error={fieldError?.confirm_password}
          onInputChange={v => handleInput('confirm_password', v)}
          icon={<Lock />}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Reset password</span>}
        </Button>
      </form>
    </FormWrapper>
  );
};

export default FormResetPassword;
