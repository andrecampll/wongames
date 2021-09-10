import Link from 'next/link';
import Button from '../Button';
import Heading from '../Heading';
import TextField from '../TextField';

import { Form, ButtonContainer } from './styles';

export type FormProfileProps = {
  username?: string;
  email?: string;
};

const FormProfile = ({ email, username }: FormProfileProps) => (
  <>
    <Heading color="black" lineBottom size="small">
      My profile
    </Heading>

    <Form>
      <TextField
        name="username"
        placeholder="Username"
        label="Username"
        initialValue={username}
      />

      <TextField
        name="email"
        type="e-mail"
        placeholder="E-mail"
        label="E-mail"
        initialValue={email}
        disabled
      />

      <ButtonContainer>
        <Link href={`/forgot-password/?email=${email}`} passHref>
          <Button minimal size="medium" as="a">
            Reset Password
          </Button>
        </Link>
        <Button size="medium">Save</Button>
      </ButtonContainer>
    </Form>
  </>
);

export default FormProfile;
