import React from "react";

import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: center;
  overflow: hidden;
  padding: 4rem 2rem;
  background-color: ${props => props.bgColor};
  margin-bottom: 0.5rem;
  min-height: 520px;
`;

const TextArea = styled.div`
  flex: 1 1 1000px;
  padding-top: 4rem;
  padding-bottom: 4rem;
  max-width: 1200px;
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

const CardSection = ({children, ancherId, bg, bgColor}) => (
  <Container id={ancherId} bgColor={bgColor}>
    <BgImage
      src={bg}
      alt="background"
    />
    <TextArea>
      {children}
    </TextArea>
  </Container>
);

export default CardSection;