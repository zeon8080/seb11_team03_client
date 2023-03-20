import { useMemo, useState } from "react";
import MainPanel from "../../../../commons/mainPanel/mainPanel";
import * as S from "./mainMiddleStyles";

const areaNames = {
  인천: ["", "", "", "", "경기도", "", "서울", "충청북도"],
  경기도: ["", "", "", "인천", "강원도", "서울", "충청북도", "경상북도"],
  강원도: ["", "", "", "경기도", "", "충청북도", "경상북도", ""],
  서울: ["", "인천", "경기도", "", "충청북도", "충청남도", "대전", "잇츠미"],
  충청북도: [
    "인천",
    "경기도",
    "강원도",
    "서울",
    "경상북도",
    "대전",
    "잇츠미",
    "대구",
  ],
  경상북도: ["경기도", "강원도", "", "충청북도", "", "잇츠미", "대구", "울산"],
  충청남도: ["", "", "서울", "", "대전", "", "광주", "전라북도"],
  대전: [
    "",
    "서울",
    "충청북도",
    "충청남도",
    "잇츠미",
    "광주",
    "전라북도",
    "경상남도",
  ],
  잇츠미: [
    "서울",
    "충청북도",
    "경상북도",
    "대전",
    "대구",
    "전라북도",
    "경상남도",
    "부산",
  ],
  대구: ["충청북도", "경상북도", "", "잇츠미", "울산", "경상남도", "부산", ""],
  울산: ["경상북도", "", "", "대구", "", "부산", "", ""],
  광주: ["", "충청남도", "대전", "", "전라북도", "", "제주", "전라남도"],
  전라북도: [
    "충청남도",
    "대전",
    "잇츠미",
    "광주",
    "경상남도",
    "제주",
    "전라남도",
    "",
  ],
  경상남도: ["대전", "잇츠미", "대구", "전라북도", "부산", "전라남도", "", ""],
  부산: ["잇츠미", "대구", "울산", "경상남도", "", "", "", ""],
  제주: ["", "광주", "전라북도", "", "전라남도", "", "", ""],
  전라남도: ["광주", "전라북도", "경상남도", "제주", "", "", "", ""],
};

export default function MainMiddle(): JSX.Element {
  const [xPos, setXpos] = useState<number>(0);
  const [yPos, setYpos] = useState<number>(0);
  const [bgXpos, setBgXpos] = useState<number>(50);
  const [bgYpos, setBgYpos] = useState<number>(54);

  const data = {
    setBgYpos,
    setBgXpos,
    setYpos,
    setXpos,
    xPos,
    yPos,
    bgXpos,
    bgYpos,
  };
  const [imageUrl] = useState("/mainImg.webp");

  const memoizedImageUrl = useMemo(() => imageUrl, [imageUrl]);
  return (
    <S.Container bgXpos={bgXpos} bgYpos={bgYpos}>
      <img src={memoizedImageUrl} />
      <S.Wrapper yPos={yPos} xPos={xPos}>
        {/* 잇츠미 */}
        <MainPanel
          {...data}
          areaNames={areaNames["잇츠미"]}
          panelXpos={0}
          panelYpos={0}
        />
        {/* 경상북도 */}
        <MainPanel
          {...data}
          areaNames={areaNames["경상북도"]}
          panelXpos={1}
          panelYpos={-1}
        />
        {/* 충청북도 */}
        <MainPanel
          {...data}
          areaNames={areaNames["충청북도"]}
          panelXpos={0}
          panelYpos={-1}
        />
        {/* 서울 */}
        <MainPanel
          {...data}
          areaNames={areaNames["서울"]}
          panelXpos={-1}
          panelYpos={-1}
        />
        {/* 인천 */}
        <MainPanel
          {...data}
          areaNames={areaNames["인천"]}
          panelXpos={-1}
          panelYpos={-2}
        />
        {/* 경기도 */}
        <MainPanel
          {...data}
          areaNames={areaNames["경기도"]}
          panelXpos={0}
          panelYpos={-2}
        />
        {/* 강원도 */}
        <MainPanel
          {...data}
          areaNames={areaNames["강원도"]}
          panelXpos={1}
          panelYpos={-2}
        />
        {/* 대전 */}
        <MainPanel
          {...data}
          areaNames={areaNames["대전"]}
          panelXpos={-1}
          panelYpos={0}
        />
        {/* 충청남도 */}
        <MainPanel
          {...data}
          areaNames={areaNames["충청남도"]}
          panelXpos={-2}
          panelYpos={0}
        />
        {/* 대구 */}
        <MainPanel
          {...data}
          areaNames={areaNames["대구"]}
          panelXpos={1}
          panelYpos={0}
        />
        {/* 울산 */}
        <MainPanel
          {...data}
          areaNames={areaNames["울산"]}
          panelXpos={2}
          panelYpos={0}
        />
        {/* 경상남도 */}
        <MainPanel
          {...data}
          areaNames={areaNames["경상남도"]}
          panelXpos={0}
          panelYpos={1}
        />
        {/* 전라북도 */}
        <MainPanel
          {...data}
          areaNames={areaNames["전라북도"]}
          panelXpos={-1}
          panelYpos={1}
        />
        {/* 광주 */}
        <MainPanel
          {...data}
          areaNames={areaNames["광주"]}
          panelXpos={-2}
          panelYpos={1}
        />
        {/* 부산 */}
        <MainPanel
          {...data}
          areaNames={areaNames["부산"]}
          panelXpos={1}
          panelYpos={1}
        />
        {/* 전라남도 */}
        <MainPanel
          {...data}
          areaNames={areaNames["전라남도"]}
          panelXpos={-1}
          panelYpos={2}
        />
        {/* 제주 */}
        <MainPanel
          {...data}
          areaNames={areaNames["제주"]}
          panelXpos={-2}
          panelYpos={2}
        />
      </S.Wrapper>
    </S.Container>
  );
}
