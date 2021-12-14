import React from "react";

import styled from "styled-components";


const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  @media (min-width: 900px) {
    flex-flow: row;
  }
`;

const Demand = styled.div`
  margin-right: 2rem;
`;

const DemandHeader = styled.h3`
  color: white;
  margin-bottom: 1rem;
`;

const DemandDescription = styled.p`
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.7rem;
`;

const Demands = () => (
  <Container>
    <Demand>
      <DemandHeader>
        1. 현실을 직시해야 합니다.
      </DemandHeader>
      <DemandDescription>
        우리는 인류의 파괴적인 성장만능주의가 불러온 제6차 대멸종 시대를 살고 있습니다. 기후재앙은 팬데믹, 생태파괴, 식량난, 기후난민 등을 가속화하여 인간 문명뿐만 아니라 모든 생물종의 생존을 위협하고 있습니다. 정부는 이런 현실을 직시하고 기후-생태위기 비상사태에 걸맞는 대응을 해야 합니다.
      </DemandDescription>
    </Demand>
    <Demand>
      <DemandHeader>
        2. 지금 행동해야 합니다.
      </DemandHeader>
      <DemandDescription>
        지구와 생명 공동체는 급속하게 회복력을 잃어가고 있습니다. 기후위기에 맞선 세계 곳곳의 비폭력 시민불복종 행동은 정부와 기업의 신속하고도 급진적인 변화를 촉구하고 있습니다. 정부를 비롯한 모든 사회구성원은 생태계의 보존과 복원, 불평등 해결, 급진적 온실가스 감축을 위한 행동에 나서야 합니다.
      </DemandDescription>
    </Demand>
    <Demand>
      <DemandHeader>
        3. 새로운 정치가 필요합니다.
      </DemandHeader>
      <DemandDescription>
        기후위기는 모두의 생존 문제이기에 정쟁이나 타협의 대상이 될 수 없습니다. 대기업과 소수 기술관료의 이해에 의해 움직이는 지금의 정치로는 답이 없습니다. 살아남기 위해서는 국적과 종을 넘어 연대해야 하며, 노동자, 농민, 지역주민 등 풀뿌리 공동체와 당사자들이 주도하는 새로운 정치가 필요합니다.
      </DemandDescription>
    </Demand>
  </Container>
);

export default Demands;
