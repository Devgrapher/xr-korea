import React from "react"
import PropTypes from "prop-types"

import treeOfLife from "../images/tree-of-life.svg"

const Header = ({ siteTitle }) => (
  <div
    style={{
      position: "relative",
      display: "flex",
      flexFlow: "column", 
      overflow: "hidden",
      padding: "4rem 2rem",
      backgroundColor: "#4ea648",
      bgOpacity: 1,
      margin: "0.5rem",
      zIndex: -10,
      minHeight: "520px",
    }}
  >
    <img
      style={{
        position: "absolute",
        maxHeight: "100vw",
        height: "100%",
        padding: "2rem",
        right: 0,
        top: 0,
        zIndex: -5,
        opacity: .055,
      }}
      src={treeOfLife}
      alt="outlines of shapes and confetti in the background "
    />
    <div
      css={{
        paddingTop: "4rem",
        paddingBottom: "4rem",
        '@media (min-width: 700px)': {
          paddingLeft: "10vw",
        },
        maxWidth: "1280px",
      }}>
      <div>
        <h1
          css={{
            color: "white",
            marginBottom: "3rem",
            '@media (min-width: 700px)': {
              width: "32rem",
            },
          }}
        >
          우리는 멸종을 향해 가고 있습니다.
        </h1>
        <p
          css={{ 
            color: "white",
            '@media (min-width: 700px)': {
              width: "36rem",
            },
          }}>
          <b>지구상의 모든 생명들은 위기에 처해 있습니다. 지구의 기후는 과학자들이 예측한 것보다 빠르게 변화하고 있으며 매우 위험한 상황입니다. 생물 다양성 손실, 대규모 흉작, 사회 및 생태적 붕괴, 대량 멸종. 시간이 부족하지만 정부는 대응하지 않았습니다.</b>
        </p>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
