import * as S from "./routeListMiddleStyles";

export default function RouteListMiddle(): JSX.Element {
  return (
    <S.Container>
      <article>
        <S.SelectWrapper>
          <S.StartSelect>출발지</S.StartSelect>
          <div>이미지</div>
          <S.EndSelect>도착지</S.EndSelect>
        </S.SelectWrapper>
        <S.RouteList>루트리스트</S.RouteList>
      </article>
      <S.MapWrapper>여기 맵</S.MapWrapper>
    </S.Container>
  );
}
