import * as S from "./reserveListMiddleStyles";

export default function ReserveListMiddle(): JSX.Element {
  return (
    <>
      <S.Container>
        <S.Title>~~~님의 예약 내역</S.Title>
        <S.Wrapper>
          <S.FoodImg src="/defaultFood.webp" />
          <S.ReserveBox>
            <S.Align>
              <S.Img src="/location_or.webp" />
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
