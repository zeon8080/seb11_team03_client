import Head from "next/head";
import { useState } from "react";
import { useEffectTMapLoad } from "../../../../commons/hooks/custom/useEffectTMapLoad";

import * as S from "./routeWriteMiddleStyles";

export default function RouteWriteMiddle(props): JSX.Element {
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
      pos: [
        { Lat: 37.491712, Lng: 127.024212 },
        { Lat: 37.491712, Lng: 127.037212 },
        { Lat: 37.504912, Lng: 127.034121 },
        { Lat: 37.510712, Lng: 127.044921 },
        { Lat: 37.506512, Lng: 127.059212 },
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
      pos: [
        { Lat: 37.490912, Lng: 127.111121 },
        { Lat: 37.500712, Lng: 127.112212 },
        { Lat: 37.501921, Lng: 127.138212 },
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
      pos: [
        { Lat: 37.550912, Lng: 126.967112 },
        { Lat: 37.547912, Lng: 126.966122 },
        { Lat: 37.549712, Lng: 126.976212 },
        { Lat: 37.545612, Lng: 126.983312 },
        { Lat: 37.539121, Lng: 126.992412 },
      ],
    },
  ];

  useEffectTMapLoad({ data: test[0], setMap: props.setMap, isSearch: true });
  return (
    <>
      <Head>
        <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
        <script src="https://apis.openapi.sk.com/tmap/jsv2?version=1&appKey=kzTmdjGzc91aQiicRAWjBCpCySY90Cs3AZJ7iVbd"></script>
      </Head>
      <S.Container>
        <div id="TMapApp" />
      </S.Container>
    </>
  );
}
