import React from "react"

import styled from "styled-components"

const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  padding: 4rem 2rem;
  background-color: ${props => props.bgColor};
  margin-bottom: 0.5rem;
  min-height: 520px;
`;

const BgImage = styled.img`
  position: absolute;
  maxHeight: 100vw;
  height: 100%;
  width: 700px;
  padding: 2rem;
  right: 0;
  top: 0;
  opacity: .06;
`;

const CardSection = ({children, bg, bgColor}) => (
  <Container bgColor={bgColor}>
    <BgImage
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
  </Container>
)

export default CardSection;