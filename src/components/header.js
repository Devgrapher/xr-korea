import React from "react"
import PropTypes from "prop-types"

import { COLORS } from "../styles/constants"
import logo from "../images/logo_xr_korea_b&w.png"
import instagram from "../images/instagram.svg"
import { Link } from "gatsby"


const Header = ({ siteTitle }) => (
  <header
    style={{
      display: "flex",
      flexFlow: "colomn",
      alignItems: "center",
      justifyContent: "space-between",
      background: COLORS.green,
      marginBottom: "0.5rem",
      padding: "2rem 2rem",
    }}
  >
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <img style={{width: "3rem"}} src={logo} alt="logo"/>
        </Link>
      </h1>
    </div>
    <div
      style={{
        display: "flex",
        flexFlow: "colomn",
        alignItems: "center",
      }}
    >
      <div>
        <a
          style={{ textDecoration: "none", color: COLORS.white, fontSize: "1.15rem", fontWeight: 600 }}
          href="https://rebellion.global"
        >
          XR Global
        </a>
      </div>
      <div>
        <a
          style={{ textDecoration: "white", color: COLORS.white, marginLeft: "2rem" }}
          href="https://www.instagram.com/xr_korea/"
        >
          <img style={{width: "1.75rem", filter: "invert(1)"}} src={instagram} alt="instagram link" />
        </a>

      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
