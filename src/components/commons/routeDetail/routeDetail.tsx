import { MouseEvent } from "react";
import { IBoardReturn } from "../../../commons/types/generated/types";
import { useCreateAtTime } from "../hooks/custom/useCreateAtTime";
import RouteDetailComment from "../routeDetailComment/routeDetailComment";
import * as S from "./routeDetailStyles";

interface IRouteDetailProps {
  data: IBoardReturn;
  idx: number;
  isActive: string;
  onClickRoute?: (event: MouseEvent<HTMLDivElement>) => void;
  onClickIsActive: (event: MouseEvent<Element, globalThis.MouseEvent>) => void;
}

export default function RouteDetail(props: IRouteDetailProps): JSX.Element {
  const { lastCreateTime } = useCreateAtTime();
  return (
    <S.Container>
      <S.TopWrapper id={String(props.idx)} onClick={props.onClickIsActive}>
        <S.HeartImg src="/heart_empty.webp" />
        <S.UserInfoWBox>
          <S.UserImg>
            <img
              src={
                props.data.user?.userImg !== null
                  ? `https://storage.googleapis.com/${props.data.user?.userImg}`
                  : "/userImg_small.webp"
              }
            />
          </S.UserImg>
          <div>{props.data.user?.nickname}</div>
        </S.UserInfoWBox>
        <S.TitleBox>
          <S.RouteTitle>{props.data.title}</S.RouteTitle>
          <S.CreateAt>{lastCreateTime(props.data.createdAt)}</S.CreateAt>
        </S.TitleBox>
        <S.LocationBox>
          <S.StartEndLocation>
            <div>출발</div>
            <div>{props.data.startArea}</div>
          </S.StartEndLocation>
          <S.ListArrowImg>
            <img src="/arrow_or.webp" />
          </S.ListArrowImg>
          <S.StartEndLocation>
            <div>도착</div>
            <div>{props.data.endArea}</div>
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
                {props.data?.personalMapData?.map((_, idx) =>
                  idx === 0 ? (
                    <img src="/routeCircle_first.webp" key={idx} />
                  ) : (
                    <img src="/routeCircle_other.webp" key={idx} />
                  )
                )}
              </S.RestaurantCircle>
              <S.RestaurantName>
                {props.data?.personalMapData?.map((el, idx) => (
                  <div key={idx}>{`${el.restaurantName ?? ""} ${
                    el.recommend !== "" ? "|" : ""
                  } ${el.recommend ?? ""}`}</div>
                ))}
              </S.RestaurantName>
            </S.RestaurantBox>
            <RouteDetailComment data={props.data} />
          </S.BottomWrapper>
        </>
      ) : (
        <></>
      )}
    </S.Container>
  );
}
