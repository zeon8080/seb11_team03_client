import { useSetIsActive } from "../../../../../commons/hooks/custom/useSetIsActive";
import RouteDetail from "../../../../../commons/routeDetail/routeDetail";
import * as S from "./userWriteListMiddleStyles";

export default function UserWriteListMiddle(): JSX.Element {
  const [isActive, onClickIsActive] = useSetIsActive();

  const test = [
    {
      userName: "나는문어나는문어",
      userIcon: "",
      title: "강남 주변 맛집 코스 추천!!",
      createAt: "2023-03-23T05:14:56.611Z",
      start: "강남",
      end: "구로",
      route: ["싱싱해요포차", "빽다방", "마피아피자앤펍", "이디야", "혼술청춘"],
      routeMenu: ["모듬 조개찜", "", "페퍼로니", "", "애플 마티니"],
      info: [
        {
          location: {
            lat: 37.491712,
            lng: 127.024212,
          },
        },
        {
          location: {
            lat: 37.491712,
            lng: 127.037212,
          },
        },

        {
          location: {
            lat: 37.504912,
            lng: 127.034121,
          },
        },
        {
          location: {
            lat: 37.510712,
            lng: 127.044921,
          },
        },
        {
          location: {
            lat: 37.506512,
            lng: 127.059212,
          },
        },
      ],
    },
    {
      userName: "나는문어나는문어",
      userIcon: "",
      title: "강남 주변 맛집 코스 추천!!",
      createAt: "2023-03-23T05:14:56.611Z",
      start: "강남",
      end: "구로",
      route: ["싱싱해요포차", "빽다방", "마피아피자앤펍", "이디야", "혼술청춘"],
      routeMenu: ["모듬 조개찜", "", "페퍼로니", "", "애플 마티니"],
      info: [
        {
          location: {
            lat: 37.490912,
            lng: 127.111121,
          },
        },
        {
          location: {
            lat: 37.500712,
            lng: 127.112212,
          },
        },
        {
          location: {
            lat: 37.501921,
            lng: 127.138212,
          },
        },
      ],
    },
    {
      userName: "나는문어나는문어",
      userIcon: "",
      title: "강남 주변 맛집 코스 추천!!",
      createAt: "2023-03-23T05:14:56.611Z",
      start: "강남",
      end: "구로",
      route: ["싱싱해요포차", "빽다방", "마피아피자앤펍", "이디야", "혼술청춘"],
      routeMenu: ["모듬 조개찜", "", "페퍼로니", "", "애플 마티니"],
      info: [
        {
          location: {
            lat: 37.550912,
            lng: 126.967112,
          },
        },
        {
          location: {
            lat: 37.547912,
            lng: 126.966122,
          },
        },

        {
          location: {
            lat: 37.549712,
            lng: 126.976212,
          },
        },
        {
          location: {
            lat: 37.545612,
            lng: 126.983312,
          },
        },
        {
          location: {
            lat: 37.539121,
            lng: 126.992412,
          },
        },
      ],
    },
  ];

  return (
    <S.Container>
      <S.Title>내가 쓴 글</S.Title>
      <S.ListWrapper>
        {test.map((_, idx) => (
          <RouteDetail
            key={idx}
            idx={idx}
            isActive={isActive}
            onClickRoute={onClickIsActive}
            onClickIsActive={onClickIsActive}
          />
        ))}
      </S.ListWrapper>
    </S.Container>
  );
}
