import { useState } from 'react';

import { Wrapper, Title, Content, Overlay } from './styles';

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
      <Overlay aria-hidden={!isOpen} onClick={() => setIsOpen(!isOpen)} />
    </Wrapper>
  );
};

export default Dropdown;
