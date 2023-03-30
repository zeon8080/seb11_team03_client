import { useState } from "react";
import { useSetIsToggle } from "../../../../commons/hooks/custom/useSetIsToggle";
import LocationSelector from "../../../../locationSelector/locationSelector";
import SearchBar from "../../../../searchBar/searchBar";
import * as S from "./routeListTopStyles";

export default function RouteListTop(): JSX.Element {
  const [location, setLocation] = useState("서울특별시");
  const [isToggle, changeIsToggle] = useSetIsToggle();
  return (
    <S.Container>
      <S.LocationWrapper
        onClick={() => {
          changeIsToggle();
        }}
      >
        <div>{location}</div>
        <S.Arrow isToggle={isToggle} />
      </S.LocationWrapper>
      <S.SelectorWrapper isToggle={isToggle}>
        <LocationSelector
          setLocation={setLocation}
          changeIsToggle={changeIsToggle}
        />
      </S.SelectorWrapper>

      <SearchBar />

      <S.routeWriteBtn href="/eatsMe/routeWrite">코스 작성</S.routeWriteBtn>
    </S.Container>
  );
}
