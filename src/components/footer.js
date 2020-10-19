import React from "react";
import PropTypes from "prop-types";

import { COLORS } from "../styles/constants";
import instagram from "../images/instagram.svg";

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      padding: "1rem",
      backgroundColor: COLORS.green,
    }}
  >
    <div
      style={{
        display: "flex",
        flexFlow: "colomn",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        fontSize: "1rem",
      }}
    >
      <div style={{ color: COLORS.white }}>
        <a
          style={{ textDecoration: "white", color: COLORS.white }}
          href="https://www.instagram.com/xr_korea/"
        >
          <img style={{width: "1rem", filter: "invert(1)"}} src={instagram} alt="instagram link" />
        </a>
      </div>
      <div style={{ color: COLORS.white, fontWeight: 700 }}>
        <a
          style={{ textDecoration: "none", color: COLORS.white}}
          href="mailto:extinctionrebellionkorea"
        >
          © {new Date().getFullYear()} {siteTitle}
        </a>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
