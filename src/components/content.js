import React from "react"

import Instagram from "./instagram-posts"
import styled from "styled-components"

import hourglass from "../images/hourglass.svg"
import orchid from "../images/orchid.svg"
import treeOfLife from "../images/tree-of-life.svg"
import CardSection from "../components/card-section"

const Headline = styled.h1`
  color: white;
  margin-bottom: 3rem;
  @media (min-width: 700px) {
    width: 32rem;
  }
`;

const Description = styled.h3`
  color: white;
  @media (min-width: 700px) {
    width: 36rem;
  }
`;

const InstaSection = {
  position: "relative",
  display: "flex",
  flexFlow: "column", 
  alignItems: "center",
  overflow: "hidden",
  padding: "4rem 2rem",
  backgroundColor: "#3860AA",
  marginBottom: "0.5rem",
  minHeight: "520px",
}

const Content = () => (
  <div>
    <CardSection
      bg={hourglass}
      bgColor="#75D0F1"
    >
      <div>
        <Headline>
          현실을 직시해야 합니다.
        </Headline>
        <Description>
          우리는 인류의 파괴적인 성장만능주의가 불러온 제6차 대멸종 시대를 살고 있습니다. 기후재앙은 팬더믹, 생태파괴, 식량난, 기후난민 등을 가속화하여 인간 문명뿐만 아니라 모든 생물종의 생존을 위협하고 있습니다. 정부는 이런 현실을 직시하고 기후-생태위기 비상사태를 선포해야 합니다.
        </Description>
      </div>
    </CardSection>
    <CardSection
      bg={orchid}
      bgColor="#EC64A7"
    >
      <div>
        <Headline>
          지금 행동해야 합니다.
        </Headline>
        <Description>
          지구가 회복력을 잃어버릴 시점까지 7년밖에 남지 않았습니다. 기후위기에 맞선 세계 곳곳의 비폭력 시민불복종 행동은 정부와 기업에 변화를 촉구하고 있습니다. 정부를 비롯한 모든 사회구성원은 생태계 보존-복원과 급진적 온실가스 감축을 위한 행동에 나서야 합니다.
        </Description>
      </div>
    </CardSection>
    <CardSection
      bg={treeOfLife}
      bgColor="#FFC11F"
    >
      <div>
        <Headline>
          이념을 넘어 연대해야 합니다.
        </Headline>
        <Description>
          지구가 회복력을 잃어버릴 시점까지 7년밖에 남지 않았습니다. 기후위기에 맞선 세계 곳곳의 비폭력 시민불복종 행동은 정부와 기업에 변화를 촉구하고 있습니다. 정부를 비롯한 모든 사회구성원은 생태계 보존-복원과 급진적 온실가스 감축을 위한 행동에 나서야 합니다.
          기후위기는 모두의 생존 문제이므로 정쟁의 대상이 될 수 없습니다. 정부는 시민의 다양한 목소리에 기초하여 기후-생태정의를 실현해야 합니다. 살아남기 위해서는 국적과 종을 넘어 연대해야 합니다.
        </Description>
      </div>
    </CardSection>
    <div style={InstaSection}>
      <Instagram />
    </div>
  </div>
)

export default Content
