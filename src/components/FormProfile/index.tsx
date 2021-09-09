import Button from '../Button';
import Heading from '../Heading';
import TextField from '../TextField';

import { Form } from './styles';

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

      <TextField
        name="password"
        type="password"
        placeholder="Type your password"
        label="Password"
      />

      <TextField
        name="new_password"
        type="password"
        placeholder="New password"
        label="New password"
      />

      <Button size="large">Save</Button>
    </Form>
  </>
);

export default FormProfile;
