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
      <ExternalButton href={to} target="_blank" rel="noopener">
        {children}
      </ExternalButton>
    ) : (
      <InternalButton to={to}>
        {children}
      </InternalButton>
    )
  );
};


const NavBar = ({ menuLinks }) => (
  <Container>
    {menuLinks.map(menu => (
      <Menu key={menu.name} to={menu.link} newTab={menu.external}>{menu.name}</Menu>
    ))}
  </Container>
);

export default NavBar;
