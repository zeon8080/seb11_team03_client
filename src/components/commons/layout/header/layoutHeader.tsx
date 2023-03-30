import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { useClickLogout } from "../../hooks/custom/useClickLogout";
import { useRouterMovePage } from "../../hooks/custom/useRouterMovePage";
import { FETCH_LOGIN_USER } from "../../hooks/query/useQueryFetchLoginUser";
import { accessTokenState } from "../../../../commons/stores";
import * as S from "./layoutHeaderStyles";

export default function LayoutHeader(): JSX.Element {
  const { onClickMovePage } = useRouterMovePage();
  const [accessToken] = useRecoilState(accessTokenState);
  const { data } = useQuery(FETCH_LOGIN_USER, {
    variables: {
      userId: accessToken,
    },
  });

  const { onClickLogout } = useClickLogout();

  return (
    <S.Container>
      {data?.fetchUser !== undefined ? (
        <S.Wrapper>
          <img onClick={onClickMovePage("/")} src="/logo_bk.webp" />
          <S.NavBox>
            <button onClick={onClickMovePage("/eatsMe/routeList")}>코스</button>
            <button onClick={onClickMovePage("/eatsMe/popularList")}>
              맛집
            </button>
          </S.NavBox>
          <S.BtnWrapper>
            <S.LoginBox onClick={onClickLogout}>
              <img src="/logout_wh.webp" />
              <S.LoginBtn>로그아웃</S.LoginBtn>
            </S.LoginBox>

            <S.UserInfoBtn onClick={onClickMovePage("/eatsMe/userInfo")}>
              내 정보
            </S.UserInfoBtn>
          </S.BtnWrapper>
        </S.Wrapper>
      ) : (
        <S.Wrapper>
          <img onClick={onClickMovePage("/")} src="/logo_bk.webp" />
          <S.NavBox>
            <a href="/eatsMe/routeList">코스 </a>
            <a href="/eatsMe/popularList">맛집 </a>
          </S.NavBox>
          <S.BtnWrapper>
            <S.LoginBox onClick={onClickMovePage("/eatsMe/login")}>
              <img src="/login_wh.webp" />
              <S.LoginBtn>로그인</S.LoginBtn>
            </S.LoginBox>
            {/* <S.LoginBox onClick={onClickLogout}>
              <img src="/logout_wh.webp" />
              <S.LoginBtn>로그아웃</S.LoginBtn>
            </S.LoginBox> */}

            <S.JoinBtn onClick={onClickMovePage("/eatsMe/join")}>
              회원가입
            </S.JoinBtn>
          </S.BtnWrapper>
        </S.Wrapper>
      )}
    </S.Container>
  );
}
