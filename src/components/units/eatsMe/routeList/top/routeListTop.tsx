import * as S from "./routeListTopStyles";

export default function RouteListTop(): JSX.Element {
  return (
    <S.Container>
      <S.LocationSelector>지역 선택</S.LocationSelector>
      <S.SearchBar>서치바</S.SearchBar>
      <S.routeWriteBtn>코스 작성</S.routeWriteBtn>
    </S.Container>
  );
}
