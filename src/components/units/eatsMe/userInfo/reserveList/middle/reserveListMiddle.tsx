import * as S from "./reserveListMiddleStyles";

export default function ReserveListMiddle(): JSX.Element {
  return (
    <>
      <S.Container>
        <S.Title>예약</S.Title>
        <S.Wrapper>
          <S.FoodImg src="/defaultFood.webp" />
          <S.ReserveBox>
            <S.Align>
              <S.Img src="/marker_or.webp" />
              <span>지역</span>
            </S.Align>
            <S.Align>
              <S.Img src="/store.webp" />
              <span>상호명</span>
            </S.Align>
            <S.ScheduleBox>
              <S.ScheduleCont>
                <S.Date>일정 : 2023.03.14</S.Date>
                <S.Time>14:00</S.Time>
              </S.ScheduleCont>
              <div>
                <S.EditBtn>수정</S.EditBtn>
                <S.EditBtn>취소</S.EditBtn>
              </div>
            </S.ScheduleBox>
          </S.ReserveBox>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
