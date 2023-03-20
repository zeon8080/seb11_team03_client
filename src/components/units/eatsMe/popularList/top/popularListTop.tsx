import { useState } from "react";
import LocationSelector from "../../../../locationSelector/locationSelector";
import SearchBar from "../../../../searchBar/searchBar";
import SubLocationSelector from "../../../../subLocationSelector/subLocationSelector";
import * as S from "./popularListTopStyles";

export default function PopularListTop(): JSX.Element {
  const [location, setLocation] = useState("서울특별시");
  const [subLocation, setSubLocation] = useState("강남구");
  return (
    <S.Container>
      <S.Wrapper>
        <S.SelectBox>
          <div>{location}</div>
          <S.Arrow />
        </S.SelectBox>
        <div>
          <LocationSelector setLocation={setLocation} />
        </div>
        <S.SubSelectBox>
          <div>{subLocation}</div>
          <S.Arrow />
        </S.SubSelectBox>
        <div>
          <SubLocationSelector setSubLocation={setSubLocation} />
        </div>
        <SearchBar />
      </S.Wrapper>
    </S.Container>
  );
}
