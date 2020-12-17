import React from 'react';

import { Link } from 'gatsby';
import styled from 'styled-components';
import { COLORS } from "../../styles/constants";
import logo from "../../images/logo.svg";
import NavBar from "./navbar";


const Container = styled.div`
  background: ${COLORS.green};
  margin-bottom: 0.5rem;
`;

const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1280px;
  overflow-x: auto;
`;

const LogoLinkItem = styled(Link)`
  flex: 0 0 3rem; // Same as 'width'
  height: 3rem;
  width: 3rem;
  color: white;
  text-decoration: none;
  padding: .5rem;
  > img {
    height: 100%;
  }
`;

const NavItem = styled.div`
  flex: 1 1;
  height: 3rem;
  min-width: 360px; // Should be increased along with the menu item count
  max-width: 600px;
`;

const Nav = props => {
  return (
    <Container>
      <HeaderBar>
        <LogoLinkItem to={`/`}>
          <img src={logo} alt="logo"/>
        </LogoLinkItem>
        <NavItem>
          <NavBar />
        </NavItem>
      </HeaderBar>
    </Container>
  );
};

export default Nav;