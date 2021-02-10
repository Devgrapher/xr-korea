import React from "react";

import styled from "styled-components";


const Container = styled.div`
  position: relative;
`;

const Description = styled.h3`
  color: white;
  @media (min-width: 700px) {
    width: 36rem;
  }
`;

const Row = styled.div`
  display: flex;
  flex-flow: row;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  > * {
    color: rgba(0, 0, 0, 0.65);
  }
`;

const RowHeader = styled.h1`
  flex: 0 1 3rem;
  text-align: right;
  line-height: 4.5rem;
  font-size: 3rem;
  margin: 0rem 1rem 0rem 0rem;
  @media (min-width: 700px) {
    flex: 0 1 4rem;
    font-size: 3.5rem;
  }
`;

const RowContent = styled.div`
  flex: 1 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

const RowTitle = styled.div`
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.8rem;
  margin-top: 0.5rem;
`;

const RowDescription = styled.div`
  font-size: 1rem;
`;

const CONTENTS = [
  ['우리는 변화에 대한 비전을 공유한다.', '미래 세대가 살아갈 수 있는 세상 만들어갑니다.'],
  ['우리는 당장 필요한 것을 한다.', '가능한 것이 아닌 필요한 것을! 여세를 몰아가는 조직화를 통해 민중들이 한데모여 체제를 변화시킵니다.'],
  ['우리에겐 돌봄재생문화가 필요하다.', '건강하고, 회복력 있는, 적응력 있는 문화를 만들어 갑니다.'],
  ['우리는 해악적인 현 시스템과 그안의 나에게 공개적으로 도전한다.', '우리의 일상적 편리를 벗어나 변화를 위한 행동에 나서기'],
  ['우리는 성찰과 배움을 추구한다.', '다음 액션을 위해 액션, 성찰, 배움, 계획의 사이클을 따릅니다. 우리만의 경험뿐 아니라 다른 운동과 맥락에서도 배움을 추구합니다.'],
  ['우리는 모두와 모두의 모든 부분을 환영한다.', '보다 안전하고 접근가능한 공간을 만들기 위해 적극적으로 일합니다.'],
  ['우리는 우리 안의 권력관계를 깨뜨린다.', '더 평등한 참여를 위해 권력의 위계 부숩니다.'],
  ['우리는 서로를 탓하거나 욕하지 않는다.', '우리는 해악적인 시스템 속에서 살고 있지만, 어느 한 개인에게 잘못을 돌릴 수 있는 것은 아닙니다.'],
  ['우리는 비폭력 네트워크다.', '비폭력 전략과 전술은 변화를 가져오는 가장 효과적인 방법입니다.'],
  ['우리는 자율성과 분권을 기반으로 삼는다.', '우리는 권력에 대항하기 위해 필요한 우리의 운동을 함께 만들어갑니다.'],
];

const Pnvs = () => (
  <Container>
    <Description>
      우리의 원칙과 가치에 부합하는 한, 누구나 자율적으로 멸종반란을 조직할 수 있습니다. 누구에게도 허락을 받을 필요가 없습니다.
    </Description>
    {
      CONTENTS.map((row, i) => {
        return (<Row>
          <RowHeader>{i + 1}</RowHeader>
          <RowContent>
            <RowTitle>
              {row[0]}
            </RowTitle>
            <RowDescription>
              {row[1]}
            </RowDescription>
          </RowContent>
        </Row>);
      })
    }
  </Container>
);

export default Pnvs;
