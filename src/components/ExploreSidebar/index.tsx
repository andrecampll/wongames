import { useState } from 'react';

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

const ExploreSidebar = ({ items, initialValues = {} }: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues);
  // const [isOpen, setIsOpen] = useState(false);

  const handleChange = (name: string, value: string | boolean) => {
    setValues(s => ({ ...s, [name]: value }));
  };

  return (
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
                isChecked={!!values[field.name]}
                onCheck={v => handleChange(field.name, v)}
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
                defaultChecked={field.name === values[item.name]}
                onChange={() => handleChange(item.name, field.name)}
              />
            ))}
        </div>
      ))}
      <Button fullWidth size="medium">
        Filter
      </Button>
    </Wrapper>
  );
};

export default ExploreSidebar;
