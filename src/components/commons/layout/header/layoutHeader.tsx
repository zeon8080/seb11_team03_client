import { useClickLogout } from "../../hooks/custom/useClickLogout";
import { useRouterMovePage } from "../../hooks/custom/useRouterMovePage";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import * as S from "./layoutHeaderStyles";
import { wrapAsync } from "../../libraries/asyncFunc";
import { useQuery } from "@apollo/client";
import { FETCH_LOGIN_USER } from "../../hooks/query/useQueryFetchLoginUser";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IHeader {
  hiddenCss: boolean;
}

export default function LayoutHeader(props: IHeader): JSX.Element {
  const { onClickMovePage } = useRouterMovePage();
  const [accessToken] = useRecoilState(accessTokenState);
  const { data } = useQuery<Pick<IQuery, "fetchLoginUser">>(FETCH_LOGIN_USER);

  const { onClickLogout } = useClickLogout();

  console.log(props.hiddenCss);
  return (
    <S.Container hiddenCss={props.hiddenCss}>
      {accessToken !== "" ? (
        <S.Wrapper>
          <img
            onClick={onClickMovePage("/")}
            src={props.hiddenCss ? "/logo_wh.webp" : "/logo_bk.webp"}
          />
          <S.NavBox>
            <a href="/eatsMe/routeList">코스 </a>
            <a href="/eatsMe/popularList">맛집 </a>
          </S.NavBox>
          <S.BtnWrapper>
            <S.LoginBox onClick={wrapAsync(onClickLogout)}>
              <img src="/logout_wh.webp" />
              <S.LoginBtn>로그아웃</S.LoginBtn>
            </S.LoginBox>

            <S.UserInfoBtn onClick={onClickMovePage("/eatsMe/userInfo")}>
              {data?.fetchLoginUser.nickname} 님
            </S.UserInfoBtn>
          </S.BtnWrapper>
        </S.Wrapper>
      ) : (
        <S.Wrapper>
          <img
            onClick={onClickMovePage("/")}
            src={props.hiddenCss ? "/logo_wh.webp" : "/logo_bk.webp"}
          />
          <S.NavBox>
            <a href="/eatsMe/routeList">코스 </a>
            <a href="/eatsMe/popularList">맛집 </a>
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
      )}
    </S.Container>
  );
}
