import * as S from "./layoutStyles";

export default function LayoutHeader(): JSX.Element {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo src="/logo_bk.webp" />
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
