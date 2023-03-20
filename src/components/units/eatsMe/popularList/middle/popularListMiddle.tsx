import * as S from "./popularListMiddleStyles";

export default function PopularListMiddle(): JSX.Element {
  return (
    <S.Container>
      <header>지역1 지역2 맛집</header>
      <S.Wrapper>
        <S.StoreBox>
          <S.StoreCont>
            <div>
              <S.FoodImg src="/defaultfood.webp" />
            </div>
            <div>
              <S.Rating>4.6</S.Rating>
              <img src="" />
              <div>
                <S.StoreImg src="/store.webp" />
                <span>상호명</span>
              </div>
              <div>휴무</div>
              <div>Open 11:00</div>
              <div>Close 22:00</div>
            </div>
            {/* <img src="" />
        <span>주소</span>
        <img src="" />
        <span>02-123-4567</span> */}
          </S.StoreCont>
        </S.StoreBox>
        <S.MapBox>지도</S.MapBox>
      </S.Wrapper>
    </S.Container>
  );
}
