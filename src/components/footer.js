import React from "react";
import PropTypes from "prop-types";

import { COLORS } from "../styles/constants";
import styled from "styled-components";

import xrLogo from "../images/xr-logo-white.svg";

const Container = styled.footer`
  background-color: ${COLORS.green};
`;

const FooterArea = styled.div`
  display: flex;
  flex-flow: colomn;
  align-ttems: center;
  justify-content: space-between;
  padding: .5rem;
  background-color: ${COLORS.green};
  fontSize: 1rem;
  max-width: 1280px;
  margin: 0 auto;
`;

const Footer = ({ siteTitle }) => (
    <Container>
      <FooterArea>
        <div style={{ color: COLORS.white, height: "2rem" }}>
          <a
            style={{ textDecoration: "white", color: COLORS.white }}
            href="http://rebellion.global/"
          >
            <img style={{ height: "100%" }} src={xrLogo} alt="instagram link" />
          </a>
        </div>
        <div style={{ color: COLORS.white, fontWeight: 700 }}>
          <a
            style={{ textDecoration: "none", lineHeight: "2rem", whiteSpace: "nowrap", color: COLORS.white, marginLeft: "0.5rem" }}
            href="mailto:extinctionrebellionkorea"
          >
            © {new Date().getFullYear()} {siteTitle}
          </a>
        </div>
      </FooterArea>
    </Container>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
