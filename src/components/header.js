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
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        <h1
          style={{
            display: "flex",
            flexFlow: "colomn",
            alignItems: "center",
            margin: 0,
          }}
        >
          <img style={{width: "2.75rem"}} src={logo} alt="logo"/>
          {/* <span style={{fontSize: "2rem", marginLeft: "0.5rem" }}>
            멸종반란
          </span>
          <span style={{fontSize: "1.75rem", marginLeft: "0.5rem", color: COLORS.gray }}>
            대한민국
          </span> */}
        </h1>
      </Link>
    </div>
    <div
      css={{ 
        display: "flex",
        flexFlow: "colomn",
        alignItems: "center",
        color: "white",
        // '@media (max-width: 480px)': {
        //   display: "none",
        // },
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
          style={{ textDecoration: "white", color: COLORS.white, marginLeft: "1rem" }}
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
