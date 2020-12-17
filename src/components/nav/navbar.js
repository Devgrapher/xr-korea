import React from 'react';

import { AnchorLink } from "gatsby-plugin-anchor-links";
import styled, { css } from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
`;

const MenuButtonStyle = css`
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

const InternalButton = styled(AnchorLink)`
  ${MenuButtonStyle}
`;

const ExternalButton = styled.a`
  ${MenuButtonStyle}
`;

const Menu = ({children, to, newTab}) => {
  return (
    newTab ? (
      <ExternalButton href={to} target="_blank">
        {children}
      </ExternalButton>
    ) : (
      <InternalButton to={to}>
        {children}
      </InternalButton>
    )
  );
};

const NavBar = () => {

  return (
    <Container>
      <Menu to="/post">소식</Menu>
      <Menu
        to="https://www.notion.so/bf0a84fb63014eef9feb9bc0771c87a8?v=bc7a835e5baf49a3896d037a3d77e4ca"
        newTab
      >
        언론보도
      </Menu>
      <Menu to="/#instagram">활동</Menu>
      <Menu to="/#join-us">참여하기</Menu>
    </Container>
  );
};

export default NavBar;
