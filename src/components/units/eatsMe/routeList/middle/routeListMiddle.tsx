import Head from "next/head";
import { useEffect, useState } from "react";
import { useEffectTMapLoad } from "../../../../commons/hooks/custom/useEffectTMapLoad";
import { useSetIsActive } from "../../../../commons/hooks/custom/useSetIsActive";
import { useSetIsToggle } from "../../../../commons/hooks/custom/useSetIsToggle";
import { mapFindRoad } from "../../../../commons/libraries/mapFindRoad";
import { mapMarker } from "../../../../commons/libraries/mapMarker";
import RouteDetail from "../../../../commons/routeDetail/routeDetail";
import SubLocationSelector from "../../../../subLocationSelector/subLocationSelector";
import * as S from "./routeListMiddleStyles";

export default function RouteListMiddle(): JSX.Element {
  const [map, setMap] = useState();
  const [marker, setMarker] = useState([]);
  const [findLine, setFindLine] = useState([]);
  const [infoWindow, setInfoWindow] = useState<any[]>([]);
  const [isActive, onClickIsActive] = useSetIsActive();
  const [isStart, changeIsStart] = useSetIsToggle();
  const [isEnd, changeIsEnd] = useSetIsToggle();
  const [startPoint, setStartPoint] = useState("출발지");
  const [endPoint, setEndPoint] = useState("도착지");

  useEffect(() => {
    if (infoWindow.length > 1) {
      infoWindow[0].setMap(null);
      setInfoWindow([infoWindow[1]]);
    }
  }, [infoWindow]);

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
  useEffectTMapLoad({
    data: test[0],
    setMap,
    marker,
    setMarker,
    findLine,
    setFindLine,
    setInfoWindow,
    isSearch: false,
  });

  const onClickRoute = (event) => {
    // 데이터 생겼을때 데이터 아이디랑 이벤트 타겟 id(여기에 데이터 아이디 바인딩)을 비교해서 같지 않을때만 onClickIsActive제외 전부 실행 되게 onClickIsActive제외은 언제나 실행
    // 어차피 state라서 이전 데이터랑 같은면 변경 안됨
    if (infoWindow[0] !== undefined) {
      infoWindow[0].setVisible(false);
    }
    mapMarker({
      data: test[event.currentTarget.id],
      map,
      marker,
      setMarker,
      setInfoWindow,
      isSearch: false,
    });
    mapFindRoad({
      data: test[event.currentTarget.id],
      map,
      findLine,
      setFindLine,
    });
    onClickIsActive(event);
  };

  return (
    <>
      <Head>
        <script src="https://apis.openapi.sk.com/tmap/jsv2?version=1&appKey=kzTmdjGzc91aQiicRAWjBCpCySY90Cs3AZJ7iVbd"></script>
      </Head>
      <S.Container>
        <article>
          <S.SelectWrapper>
            <S.StartSelect
              onClick={() => {
                changeIsStart();
              }}
            >
              <div>{startPoint}</div>
              <S.StartArrow isToggle={isStart} />
            </S.StartSelect>
            <S.StartSelectorWrapper isToggle={isStart}>
              <SubLocationSelector
                changeIsToggle={changeIsStart}
                setSubLocation={setStartPoint}
              />
            </S.StartSelectorWrapper>
            <S.ArrowImgWrapper>
              <img src="/arrow_or.webp" />
            </S.ArrowImgWrapper>
            <S.EndSelect
              onClick={() => {
                changeIsEnd();
              }}
            >
              <div>{endPoint}</div>
              <S.EndArrow isToggle={isEnd} />
            </S.EndSelect>
            <S.EndSelectorWrapper isToggle={isEnd}>
              <SubLocationSelector
                changeIsToggle={changeIsEnd}
                setSubLocation={setEndPoint}
              />
            </S.EndSelectorWrapper>
          </S.SelectWrapper>
          {test.map((el, idx) => (
            <RouteDetail
              key={idx}
              idx={idx}
              onClickRoute={onClickRoute}
              isActive={isActive}
              onClickIsActive={onClickIsActive}
            />
          ))}
        </article>

        <S.MapWrapper>
          <div
            id="TMapApp"
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </S.MapWrapper>
      </S.Container>
    </>
  );
}
