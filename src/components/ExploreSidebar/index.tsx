import { useState } from 'react';
import xor from 'lodash.xor';
import { Close } from '@styled-icons/material-outlined/Close';
import { FilterList } from '@styled-icons/material-outlined/FilterList';

import { ParsedUrlQueryInput } from 'querystring';
import Heading from '../Heading';
import Checkbox from '../Checkbox';
import Radio from '../Radio';
import Button from '../Button';

import {
  Wrapper,
  Overlay,
  IconWrapper,
  Items,
  Content,
  Footer,
} from './styles';

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

type Values = ParsedUrlQueryInput;

export type ExploreSidebarProps = {
  items: ItemProps[];
  initialValues?: Values;
  onFilter: (values: Values) => void;
};

const ExploreSidebar = ({
  items,
  initialValues = {},
  onFilter,
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues);
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckbox = (name: string, value: string) => {
    const currentList = (values[name] as []) || [];
    setValues(s => ({ ...s, [name]: xor(currentList, [value]) }));
  };

  const handleRadio = (name: string, value: string | boolean) => {
    setValues(s => ({ ...s, [name]: value }));
  };

  const handleFilter = () => {
    onFilter(values);
    setIsOpen(false);
  };

  return (
    <Wrapper isOpen={isOpen}>
      <Overlay aria-hidden={isOpen} />
      <IconWrapper>
        <FilterList aria-label="open filters" onClick={() => setIsOpen(true)} />
        <Close aria-label="close filters" onClick={() => setIsOpen(false)} />
      </IconWrapper>

      <Content>
        {items.map(item => (
          <Items key={item.title}>
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
                  isChecked={(values[item.name] as string[])?.includes(
                    field.name,
                  )}
                  onCheck={() => handleCheckbox(item.name, field.name)}
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
                  defaultChecked={
                    String(field.name) === String(values[item.name])
                  }
                  onChange={() => handleRadio(item.name, field.name)}
                />
              ))}
          </Items>
        ))}
      </Content>

      <Footer>
        <Button fullWidth size="medium" onClick={handleFilter}>
          Filter
        </Button>
      </Footer>
    </Wrapper>
  );
};

export default ExploreSidebar;
