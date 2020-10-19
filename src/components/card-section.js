import React from "react"

const CardSection = ({children, bg, bgColor}) => (
  <div
    style={{
      position: "relative",
      display: "flex",
      flexFlow: "column", 
      overflow: "hidden",
      padding: "4rem 2rem",
      backgroundColor: bgColor,
      bgOpacity: 1,
      marginBottom: "0.5rem",
      minHeight: "520px",
    }}
  >
    <img
      style={{
        position: "absolute",
        maxHeight: "100vw",
        height: "100%",
        width: "700px",
        padding: "2rem",
        right: 0,
        top: 0,
        opacity: .155,
      }}
      src={bg}
      alt="background"
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
      {children}
    </div>
  </div>
)

export default CardSection;