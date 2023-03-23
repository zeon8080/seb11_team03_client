import * as S from "./layoutStyles";

export default function LayoutHeader(): JSX.Element {
  return (
    <S.Container>
      <S.Wrapper>
        <img src="/logo_bk.webp" />
        <S.NavBox>
          <button>코스</button>
          <button>맛집</button>
        </S.NavBox>
        <S.BtnWrapper>
          <S.LoginBox>
            <img src="/login_wh.webp" />
            <S.LoginBtn>로그인</S.LoginBtn>
          </S.LoginBox>

          <S.JoinBtn>회원가입</S.JoinBtn>
        </S.BtnWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
