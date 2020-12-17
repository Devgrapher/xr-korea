import React from 'react';

import { Link } from 'gatsby';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
`;

const MenuButton = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 0 1rem;
  min-width: 5rem;
  height: 3rem;
  line-height: 3rem;
  overflow: hidden;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  :hover {
    background-color: rgba(0,0,0,.05);
  }
`;

const Menu = ({children}) => {
  return (
    <MenuButton to={`/`}>
      {children}
    </MenuButton>
  );
};

const NavBar = () => {

  return (
    <Container>
      <Menu>뉴스</Menu>
      <Menu>보도자료</Menu>
      <Menu>활동</Menu>
      <Menu>참여하기</Menu>
    </Container>
  );
};

export default NavBar;
