import Head from "next/head";
import { MouseEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { fetchBoardsByEveryInputState } from "../../../../../commons/stores";
import { useClickRouteList } from "../../../../commons/hooks/custom/useClickRouteList";
import { useEffectTMapLoad } from "../../../../commons/hooks/custom/useEffectTMapLoad";
import { useSetIsActive } from "../../../../commons/hooks/custom/useSetIsActive";
import { useSetIsToggle } from "../../../../commons/hooks/custom/useSetIsToggle";
import { mapFindRoad } from "../../../../commons/libraries/mapFindRoad";
import { mapMarker } from "../../../../commons/libraries/mapMarker";
import RouteDetail from "../../../../commons/routeDetail/routeDetail";
import LocationSelector from "../../../../locationSelector/locationSelector";
import SubLocationSelector from "../../../../subLocationSelector/subLocationSelector";
import * as S from "./routeListMiddleStyles";

export default function RouteListMiddle(): JSX.Element {
  const [map, setMap] = useState<any>({});
  const [marker, setMarker] = useState<any[]>([]);
  const [findLine, setFindLine] = useState<any[]>([]);
  const [infoWindow, setInfoWindow] = useState<any[]>([]);
  const [isActive, onClickIsActive] = useSetIsActive();
  const [isStart, changeIsStart] = useSetIsToggle();
  const [isEnd, changeIsEnd] = useSetIsToggle();
  const [startPoint, setStartPoint] = useState("");
  const [endPoint, setEndPoint] = useState("");
  const [startArea, setStartArea] = useState("서울시");
  const [endArea, setEndArea] = useState("");
  const [isStartToggle, changeIsStartToggle] = useSetIsToggle();
  const [isEndToggle, changeIsEndToggle] = useSetIsToggle();
  const [, setFetchBoardsByEveryInput] = useRecoilState(
    fetchBoardsByEveryInputState
  );
  const [reserve, setReserve] = useState("");
  const [isLoad, setIsLoad] = useState(false);

  const { data, refetch } = useClickRouteList({
    fetchBoardsByEveryInput: {
      startArea,
    },
  });

  useEffect(() => {
    if (reserve !== "") {
      localStorage.setItem("reserve", JSON.stringify(reserve));
      window.location.href = "/eatsMe/reserve";
    }
  }, [reserve]);

  useEffect(() => {
    if (Object.keys(map).length !== 0) {
      const obj = { startPoint, endPoint, startArea, endArea };
      const fetchBoardsByEveryInput = Object.fromEntries(
        Object.entries(obj).filter(([_, value]) => value !== "")
      );
      setFetchBoardsByEveryInput(fetchBoardsByEveryInput);
      void refetch({ fetchBoardsByEveryInput });
    }
  }, [startPoint, endPoint, startArea, endArea]);

  useEffectTMapLoad({
    data: data?.fetchBoardsByEvery[0],
    map,
    setMap,
    marker,
    setMarker,
    findLine,
    setFindLine,
    setInfoWindow,
    isWrite: false,
    isSearch: false,
    setReserve,
  });

  useEffect(() => {
    if (infoWindow.length > 1) {
      infoWindow[0].setMap(null);
      setInfoWindow([infoWindow[1]]);
    }
  }, [infoWindow]);

  const onClickRoute =
    (idx: string) =>
    (event: MouseEvent<HTMLDivElement>): void => {
      if (infoWindow[0] !== undefined) {
        infoWindow[0].setVisible(false);
      }
      mapMarker({
        data: data?.fetchBoardsByEvery[Number(idx)],
        map,
        marker,
        setMarker,
        setInfoWindow,
        isWrite: false,
        isSearch: false,
        setReserve,
      });

      mapFindRoad({
        data: data?.fetchBoardsByEvery[Number(idx)],
        map,
        findLine,
        setFindLine,
        isWrite: false,
        setReserve,
      });

      onClickIsActive(event);
    };

  return (
    <>
      <Head>
        <script src="https://apis.openapi.sk.com/tmap/jsv2?version=1&appKey=kzTmdjGzc91aQiicRAWjBCpCySY90Cs3AZJ7iVbd"></script>
      </Head>
      <S.Container>
        <S.SelectWrapper>
          <S.BoxWrapper className="start">
            <S.CityWrapper>
              <S.City
                onClick={() => {
                  changeIsStartToggle();
                }}
              >
                <div>{startArea === "" ? "출발지역" : startArea}</div>
                <S.Arrow isStartToggle={isStartToggle} />
              </S.City>
              <S.SelectorWrapper isToggle={isStartToggle}>
                <LocationSelector
                  setLocation={setStartArea}
                  changeIsToggle={changeIsStartToggle}
                />
              </S.SelectorWrapper>
            </S.CityWrapper>

            <S.DistrictWrapper>
              <S.District
                onClick={() => {
                  changeIsStart();
                }}
              >
                <div>{startPoint === "" ? "출발지" : startPoint}</div>
                <S.Arrow isStart={isStart} />
              </S.District>
              <S.SelectorWrapper isToggle={isStart}>
                <SubLocationSelector
                  isLoad={isLoad}
                  isList={true}
                  setIsLoad={setIsLoad}
                  location={startArea}
                  changeIsToggle={changeIsStart}
                  setSubLocation={setStartPoint}
                />
              </S.SelectorWrapper>
            </S.DistrictWrapper>
          </S.BoxWrapper>

          <S.ArrowImg src="/arrow_or.webp" />

          <S.BoxWrapper className="end">
            <S.CityWrapper>
              <S.City
                onClick={() => {
                  changeIsEndToggle();
                }}
              >
                <div>{endArea === "" ? "도착지역" : endArea}</div>
                <S.Arrow isEndToggle={isEndToggle} />
              </S.City>
              <S.SelectorWrapper isToggle={isEndToggle}>
                <LocationSelector
                  setLocation={setEndArea}
                  changeIsToggle={changeIsEndToggle}
                />
              </S.SelectorWrapper>
            </S.CityWrapper>

            <S.DistrictWrapper>
              <S.District
                onClick={() => {
                  changeIsEnd();
                }}
              >
                <div>{endPoint === "" ? "도착지" : endPoint}</div>
                <S.Arrow isEnd={isEnd} />
              </S.District>
              <S.SelectorWrapper isToggle={isEnd}>
                <SubLocationSelector
                  location={endArea}
                  changeIsToggle={changeIsEnd}
                  setSubLocation={setEndPoint}
                />
              </S.SelectorWrapper>
            </S.DistrictWrapper>
          </S.BoxWrapper>
        </S.SelectWrapper>
        <S.Contents>
          <S.ListWrapper>
            <S.ItemWrapper>
              {data?.fetchBoardsByEvery.map((el, idx) => (
                <RouteDetail
                  data={el}
                  key={idx}
                  idx={idx}
                  isActive={isActive}
                  onClickRoute={onClickRoute}
                  onClickIsActive={onClickIsActive}
                />
              ))}
            </S.ItemWrapper>
          </S.ListWrapper>

          <S.MapWrapper>
            <div
              id="TMapApp"
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </S.MapWrapper>
        </S.Contents>
      </S.Container>
    </>
  );
}
