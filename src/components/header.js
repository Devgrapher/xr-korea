import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { COLORS } from "../styles/constants";
import logo from "../images/logo.svg";
import title from "../images/title.png";
import instagram from "../images/instagram.svg";


const Container = styled.div`
  display: flex;
  flex-flow: colomn;
  justify-content: space-between;
  align-contents: center;
  background: ${COLORS.green};
  margin-bottom: 0.5rem;
  padding: 1.5rem 1.5rem;
`;

const LeftHeader = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  flex-flow: colomn;
  align-items: center;
  margin: 0;
  > img {
    margin-right: 1rem;
  }
`;

const RightHeader = styled.div`
  display: flex;
  flex-flow: colomn;
  align-items: center;
  color: white;
`;

const Log = styled.img`
  width: 2.5rem;
`;

const Title = styled.img`
  width: 10rem;
`;

const InstaLink = styled.a`
  text-decoration: white;
  color: ${COLORS.white};
  margin-feft: 1rem;
`;

const Header = ({ siteTitle }) => (
  <Container>
    <LeftHeader href="/">
      <Log src={logo} alt="logo"/>
      <Title src={title} alt="title"/>
    </LeftHeader>
    <RightHeader>
      <InstaLink href="https://www.instagram.com/xr_korea/">
        <img style={{height: "100%", verticalAlign: "middle", filter: "invert(1)"}} src={instagram} alt="instagram link" />
      </InstaLink>
    </RightHeader>
  </Container>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
