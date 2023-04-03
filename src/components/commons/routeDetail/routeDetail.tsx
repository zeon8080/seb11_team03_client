import { MouseEvent } from "react";
import RouteDetailComment from "../routeDetailComment/routeDetailComment";
import * as S from "./routeDetailStyles";

interface IRouteDetailProps {
  idx: number;
  isActive: string;
  onClickRoute: (event: MouseEvent<HTMLDivElement>) => void;
  onClickIsActive: (event: MouseEvent<Element, globalThis.MouseEvent>) => void;
}

export default function RouteDetail(props: IRouteDetailProps): JSX.Element {
  const menu = [
    "싱싱해요포차 | 모듬 조개찜",
    "싱싱해요포차 | 모듬 조개찜",
    "싱싱해요포차 | 모듬 조개찜",
    "싱싱해요포차 | 모듬 조개찜",
  ];
  return (
    <S.Container>
      <S.TopWrapper id={String(props.idx)} onClick={props.onClickRoute}>
        <S.HeartImg src="/heart_empty.webp" />
        <S.UserInfoWBox>
          <S.UserImg>
            <img src="/userImg_small.webp" />
          </S.UserImg>
          <div>나는문어나는문어</div>
        </S.UserInfoWBox>
        <S.TitleBox>
          <S.RouteTitle>강남 주변 맛집 코스 추천!!!!!가가</S.RouteTitle>
          <S.CreateAt>12일전</S.CreateAt>
        </S.TitleBox>
        <S.LocationBox>
          <S.StartEndLocation>
            <div>출발</div>
            <div>서울특별시</div>
          </S.StartEndLocation>
          <S.ListArrowImg>
            <img src="/arrow_or.webp" />
          </S.ListArrowImg>
          <S.StartEndLocation>
            <div>도착</div>
            <div>제주도</div>
          </S.StartEndLocation>
        </S.LocationBox>
      </S.TopWrapper>
      <S.ArrowDownImg
        src={
          props.isActive === String(props.idx)
            ? "/arrow_up.webp"
            : "/arrow_down.webp"
        }
        onClick={props.onClickIsActive}
      />
      {props.isActive === String(props.idx) ? (
        <>
          <S.DivideLine></S.DivideLine>
          <S.BottomWrapper>
            <S.RestaurantBox>
              <S.RestaurantCircle>
                {menu.map((_, idx) =>
                  idx === 0 ? (
                    <img src="/routeCircle_first.webp" key={idx} />
                  ) : (
                    <img src="/routeCircle_other.webp" key={idx} />
                  )
                )}
              </S.RestaurantCircle>
              <S.RestaurantName>
                {menu.map((el, idx) => (
                  <div key={idx}>{el}</div>
                ))}
              </S.RestaurantName>
            </S.RestaurantBox>
            <RouteDetailComment />
          </S.BottomWrapper>
        </>
      ) : (
        <></>
      )}
    </S.Container>
  );
}
