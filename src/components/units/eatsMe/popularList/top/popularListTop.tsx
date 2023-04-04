import { useState } from "react";
import axios from "axios";
import { useSetIsToggle } from "../../../../commons/hooks/custom/useSetIsToggle";
import SubLocationSelector from "../../../../subLocationSelector/subLocationSelector";
import * as S from "./popularListTopStyles";

export default function PopularListTop(props: any): JSX.Element {
  const [isStart, changeIsStart] = useSetIsToggle();
  const [startPoint, setStartPoint] = useState("강남구");

  const onClickLocation = async (): Promise<void> => {
    const result = await axios.get(
      `https://jjjbackendclass.shop/info/road/restaurant?area=서울시&section=${startPoint}`
      // "https://jjjbackendclass.shop/info/road/restaurant?area=서울시&section=강남구"
    );
    console.log("버튼콘솔", result);
    props.setLocation(result);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.CityWrapper>
          <S.City>
            <div>서울시</div>
          </S.City>
        </S.CityWrapper>

        <S.DistrictWrapper>
          <S.District
            onClick={() => {
              changeIsStart();
            }}
          >
            <div>{startPoint === "" ? "지역" : startPoint}</div>
            <S.Arrow isStart={isStart} />
          </S.District>
          <S.SelectorWrapper isToggle={isStart}>
            <SubLocationSelector
              location={"서울시"}
              changeIsToggle={changeIsStart}
              setSubLocation={setStartPoint}
            />
          </S.SelectorWrapper>
        </S.DistrictWrapper>
        <S.LocationBtn onClick={onClickLocation}>맛집 검색</S.LocationBtn>
      </S.Wrapper>
    </S.Container>
  );
}
