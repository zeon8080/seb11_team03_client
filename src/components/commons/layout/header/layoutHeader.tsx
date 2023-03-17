import * as S from "./layoutStyles";

export default function LayoutHeader(): JSX.Element {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ImgWrapper>
          <img src="/eats_me_logo.png" />
        </S.ImgWrapper>
        <S.BtnWrapper>
          <S.LoginBox>
            <img src="/login_icon.png" />
            <S.LoginBtn>로그인</S.LoginBtn>
          </S.LoginBox>

          <S.JoinBtn>회원가입</S.JoinBtn>
        </S.BtnWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
