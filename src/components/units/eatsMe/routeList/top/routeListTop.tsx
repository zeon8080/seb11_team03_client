import { useState } from "react";
import LocationSelector from "../../../../locationSelector/locationSelector";
import * as S from "./routeListTopStyles";

export default function RouteListTop(): JSX.Element {
  const [location, setLocation] = useState("서울특별시");
  console.log(location);
  return (
    <S.Container>
      <S.LocationWrapper>
        <div>{location}</div>
        <S.Arrow />
      </S.LocationWrapper>
      <div>
        <LocationSelector setLocation={setLocation} />
      </div>
      <S.SearchBar placeholder="검색어를 입력해주세요." />
      <S.routeWriteBtn>코스 작성</S.routeWriteBtn>
    </S.Container>
  );
}
