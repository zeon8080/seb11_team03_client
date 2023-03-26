import { useRouterMovePage } from "../../hooks/custom/useRouterMovePage";
import * as S from "./layoutStyles";

export default function LayoutHeader(): JSX.Element {
  const { onClickMovePage } = useRouterMovePage();

  return (
    <S.Container>
      <S.Wrapper>
        <img onClick={onClickMovePage("/")} src="/logo_bk.webp" />
        <S.NavBox>
          <button onClick={onClickMovePage("/eatsMe/routeList")}>코스</button>
          <button onClick={onClickMovePage("/eatsMe/popularList")}>맛집</button>
        </S.NavBox>
        <S.BtnWrapper>
          <S.LoginBox onClick={onClickMovePage("/eatsMe/login")}>
            <img src="/login_wh.webp" />
            <S.LoginBtn>로그인</S.LoginBtn>
          </S.LoginBox>

          <S.JoinBtn onClick={onClickMovePage("/eatsMe/join")}>
            회원가입
          </S.JoinBtn>
        </S.BtnWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
