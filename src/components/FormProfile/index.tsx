import Button from '../Button';
import Heading from '../Heading';
import TextField from '../TextField';

import { Form } from './styles';

const FormProfile = () => (
  <>
    <Heading color="black" lineBottom size="small">
      My profile
    </Heading>

    <Form>
      <TextField name="name" placeholder="Name" label="Name" />

      <TextField
        name="email"
        type="e-mail"
        placeholder="E-mail"
        label="E-mail"
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
