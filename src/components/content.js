import React from "react";

import Instagram from "./instagram-posts";
import styled from "styled-components";

import hourglass from "../images/hourglass.svg";
import orchid from "../images/orchid.svg";
import treeOfLife from "../images/tree-of-life.svg";
import bird from "../images/bird.svg";
import { COLORS } from "../styles/constants";
import CardSection from "../components/card-section";
import Demands from "../components/demands";
import Pnvs from "../components/pnvs";


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

const InstaSection = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  overflow: hidden;
  padding: 4rem 2rem;
  background-color: #3860AA;
  margin-bottom: 0.5rem;
  min-height: 520px;
`;

const JoinButton = styled.a`
  position: relative;
  background-color: ${COLORS.green};
  border: none;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.4rem;
  font-weight: bold;
`;

const Content = () => (
  <div>
    <CardSection
      bg={orchid}
      bgColor="#75D0F1"
    >
      <div>
        <Headline>
          과학은 분명히 이야기합니다.
        </Headline>
        <Description>
          우리는 전 세계적인 재앙에 직면해 있습니다. 지구상의 모든 생명은 위험에 처해 있으며 과학자들은 우리가 기후 및 생태적 붕괴의 시대에 접어들고 있다는 것에 동의합니다. 전례없는 규모의 폭염, 가뭄, 산불에서 해수면 상승 이르기까지 우리가 행동하지 않는 동안 상황은 악화되고 있으며 남은 시간은 점점 줄어들고 있습니다.
        </Description>
      </div>
    </CardSection>
    <CardSection
      bg={treeOfLife}
      bgColor="#FFC11F"
    >
      <div>
        <Headline>
          불평등과 차별은 기후위기를 가속 시킵니다.
        </Headline>
        <Description>
          북반구 부자 나라들이 무차별적 채굴과 경제성장, 팽창을 추구하면서 배출된 온실가스로 인해 멸종의 위기가 왔습니다. 한 나라 안에서도 부유한 계층의 과도한 소비로 인해 위기가 가속되고 있습니다. 반면 기후위기에 책임이 적은 남반구, 저소득층, 여성, 비인간 동물일수록 차별 받으며 더 큰 멸종의 위협에 시달립니다.
        </Description>
      </div>
    </CardSection>
    <CardSection
      bg={hourglass}
      bgColor="#EC64A7"
    >
      <div>
        <Headline>
          우리의 요구
        </Headline>
        <Demands/>
      </div>
    </CardSection>
    <CardSection
      bg={treeOfLife}
      bgColor="#906198"
    >
      <div>
        <Headline>
          우리의 원칙
        </Headline>
        <Pnvs/>
      </div>
    </CardSection>
    <InstaSection
      id="instagram"
    >
      <Instagram />
    </InstaSection>
    <CardSection
      ancherId="join-us"
      bg={bird}
      bgColor="#906198"
    >
      <div>
        <Headline>
          당신은 혼자가 아닙니다.
        </Headline>
        <Description>
          더이상 바꿀 수 없는 미래에 홀로 좌절하지 마세요. 함께 이야기를 나누는 것에서 변화는 시작됩니다. 우리의 경험과 이야기를 들어보세요. 평범한 시민이 어떻게 세상을 변화시키는지 옆에서 직접 목격하세요.
        </Description>
        <JoinButton href='https://forms.gle/rEkeQQDAfLussaex9' target="_blank" rel="noopener">
          참여하기
        </JoinButton>
      </div>
    </CardSection>
  </div>
);

export default Content;
