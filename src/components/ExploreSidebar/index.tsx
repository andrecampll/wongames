import Heading from '../Heading';
import Checkbox from '../Checkbox';
import Radio from '../Radio';
import Button from '../Button';

import { Wrapper } from './styles';

const ExploreSidebar = () => (
  <Wrapper>
    <Heading lineBottom lineColor="secondary" size="small">
      Price
    </Heading>

    <Checkbox name="under-50" label="Under $50" labelFor="under-50" />
    <Heading lineBottom lineColor="secondary" size="small">
      Sort by
    </Heading>

    <Radio
      id="high-to-low"
      name="sort-by"
      label="high to low"
      labelFor="high-to-low"
      value="high-to-low"
    />
    <Heading lineBottom lineColor="secondary" size="small">
      Genre
    </Heading>
    <Heading lineBottom lineColor="secondary" size="small">
      System
    </Heading>

    <Button fullWidth size="medium">
      Filter
    </Button>
  </Wrapper>
);

export default ExploreSidebar;
