import { useState } from 'react';

import { Wrapper, Title, Content } from './styles';

export type DropdownProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper isOpen={isOpen}>
      <Title onClick={() => setIsOpen(!isOpen)}>{title}</Title>

      <Content aria-hidden={!isOpen}>{children}</Content>
    </Wrapper>
  );
};

export default Dropdown;
