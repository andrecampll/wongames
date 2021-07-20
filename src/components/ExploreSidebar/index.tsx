import Heading from '../Heading';
import Checkbox from '../Checkbox';
import Radio from '../Radio';
import Button from '../Button';

import { Wrapper } from './styles';

export type ItemProps = {
  title: string;
  name: string;
  type: string;
  fields: Field[];
};

type Field = {
  label: string;
  name: string;
};

type Values = {
  [field: string]: boolean | string;
};

export type ExploreSidebarProps = {
  items: ItemProps[];
  initialValues?: Values;
  onFilter: (values: Values) => void;
};

const ExploreSidebar = ({ items }: ExploreSidebarProps) => (
  <Wrapper>
    {items.map(item => (
      <div key={item.title}>
        <Heading lineBottom lineColor="secondary" size="small">
          {item.title}
        </Heading>

        {item.type === 'checkbox' &&
          item.fields.map(field => (
            <Checkbox
              key={field.name}
              name={field.name}
              label={field.label}
              labelFor={field.name}
            />
          ))}

        {item.type === 'radio' &&
          item.fields.map(field => (
            <Radio
              id={field.name}
              key={field.name}
              value={field.name}
              name={item.name}
              label={field.label}
              labelFor={field.name}
            />
          ))}
      </div>
    ))}
    <Button fullWidth size="medium">
      Filter
    </Button>
  </Wrapper>
);

export default ExploreSidebar;
