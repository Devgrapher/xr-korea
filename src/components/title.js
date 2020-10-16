import React from "react"

import { COLORS } from "../styles/constants"
import CardSection from "../components/card-section"
import frenchSuperbird from "../images/french-superbird.svg"

const Title = () => (
  <CardSection
    bg={frenchSuperbird}
    bgColor={COLORS.green}
  >
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
      <h3
        css={{ 
          color: "white",
          '@media (min-width: 700px)': {
            width: "36rem",
          },
        }}>
        지구상의 모든 생명들은 위기에 처해 있습니다. 지구의 기후는 과학자들이 예측한 것보다 빠르게 변화하고 있으며 매우 위험한 상황입니다. 생물 다양성 손실, 대규모 흉작, 사회 및 생태적 붕괴, 대량 멸종. 시간이 부족하지만 정부는 대응하지 않았습니다.
      </h3>
    </div>
  </CardSection>
)

export default Title
