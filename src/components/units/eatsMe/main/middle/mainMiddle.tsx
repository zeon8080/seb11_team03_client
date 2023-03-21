import { useState } from "react";
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

const areaImgs = [
  "/mainImg/main.webp",
  "/mainImg/main1.webp",
  "/mainImg/main2.webp",
  "/mainImg/main3.webp",
  "/mainImg/main4.webp",
  "/mainImg/main5.webp",
  "/mainImg/main6.webp",
  "/mainImg/main7.webp",
  "/mainImg/main8.webp",
  "/mainImg/main9.webp",
  "/mainImg/main10.webp",
  "/mainImg/main11.webp",
  "/mainImg/main12.webp",
  "/mainImg/main13.webp",
  "/mainImg/main14.webp",
  "/mainImg/main15.webp",
  "/mainImg/main16.webp",
  "/mainImg/empty.webp",
];

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
  // const [imageUrl] = useState("/mainImg.webp");

  // const memoizedImageUrl = useMemo(() => imageUrl, [imageUrl]);
  return (
    <S.Container bgXpos={bgXpos} bgYpos={bgYpos}>
      {/* <img src={memoizedImageUrl} /> */}
      <S.Wrapper yPos={yPos} xPos={xPos}>
        {/* 잇츠미 */}
        <MainPanel
          {...data}
          areaNames={areaNames["잇츠미"]}
          panelXpos={0}
          panelYpos={0}
          areaImg={areaImgs[0]}
          title={"잇츠미"}
        />
        {/* 경상북도 */}
        <MainPanel
          {...data}
          areaNames={areaNames["경상북도"]}
          panelXpos={1}
          panelYpos={-1}
          areaImg={areaImgs[8]}
          title={"경상북도"}
        />
        {/* 충청북도 */}
        <MainPanel
          {...data}
          areaNames={areaNames["충청북도"]}
          panelXpos={0}
          panelYpos={-1}
          areaImg={areaImgs[7]}
          title={"충청북도"}
        />
        {/* 서울 */}
        <MainPanel
          {...data}
          areaNames={areaNames["서울"]}
          panelXpos={-1}
          panelYpos={-1}
          areaImg={areaImgs[2]}
          title={"서울특별시"}
        />
        {/* 인천 */}
        <MainPanel
          {...data}
          areaNames={areaNames["인천"]}
          panelXpos={-1}
          panelYpos={-2}
          areaImg={areaImgs[1]}
          title={"인천광역시"}
        />
        {/* 경기도 */}
        <MainPanel
          {...data}
          areaNames={areaNames["경기도"]}
          panelXpos={0}
          panelYpos={-2}
          areaImg={areaImgs[3]}
          title={"경기도"}
        />
        {/* 강원도 */}
        <MainPanel
          {...data}
          areaNames={areaNames["강원도"]}
          panelXpos={1}
          panelYpos={-2}
          areaImg={areaImgs[4]}
          title={"강원도"}
        />
        {/* 대전 */}
        <MainPanel
          {...data}
          areaNames={areaNames["대전"]}
          panelXpos={-1}
          panelYpos={0}
          areaImg={areaImgs[6]}
          title={"대전광역시"}
        />
        {/* 충청남도 */}
        <MainPanel
          {...data}
          areaNames={areaNames["충청남도"]}
          panelXpos={-2}
          panelYpos={0}
          areaImg={areaImgs[5]}
          title={"충청남도"}
        />
        {/* 대구 */}
        <MainPanel
          {...data}
          areaNames={areaNames["대구"]}
          panelXpos={1}
          panelYpos={0}
          areaImg={areaImgs[9]}
          title={"대구광역시"}
        />
        {/* 울산 */}
        <MainPanel
          {...data}
          areaNames={areaNames["울산"]}
          panelXpos={2}
          panelYpos={0}
          areaImg={areaImgs[13]}
          title={"울산광역시"}
        />
        {/* 경상남도 */}
        <MainPanel
          {...data}
          areaNames={areaNames["경상남도"]}
          panelXpos={0}
          panelYpos={1}
          areaImg={areaImgs[11]}
          title={"경상남도"}
        />
        {/* 전라북도 */}
        <MainPanel
          {...data}
          areaNames={areaNames["전라북도"]}
          panelXpos={-1}
          panelYpos={1}
          areaImg={areaImgs[10]}
          title={"전라북도"}
        />
        {/* 광주 */}
        <MainPanel
          {...data}
          areaNames={areaNames["광주"]}
          panelXpos={-2}
          panelYpos={1}
          areaImg={areaImgs[14]}
          title={"광주광역시"}
        />
        {/* 부산 */}
        <MainPanel
          {...data}
          areaNames={areaNames["부산"]}
          panelXpos={1}
          panelYpos={1}
          areaImg={areaImgs[12]}
          title={"부산광역시"}
        />
        {/* 전라남도 */}
        <MainPanel
          {...data}
          areaNames={areaNames["전라남도"]}
          panelXpos={-1}
          panelYpos={2}
          areaImg={areaImgs[15]}
          title={"전라남도"}
        />
        {/* 제주 */}
        <MainPanel
          {...data}
          areaNames={areaNames["제주"]}
          panelXpos={-2}
          panelYpos={2}
          areaImg={areaImgs[16]}
          title={"제주도"}
        />
        {/* 빈이미지 경상북도 옆 */}
        <MainPanel
          {...data}
          panelXpos={2}
          panelYpos={-1}
          areaImg={areaImgs[17]}
        />
        {/* 빈이미지 부산 옆 */}
        <MainPanel
          {...data}
          panelXpos={2}
          panelYpos={1}
          areaImg={areaImgs[17]}
        />
        {/* 빈이미지 전라남도 옆 */}
        <MainPanel
          {...data}
          panelXpos={0}
          panelYpos={2}
          areaImg={areaImgs[17]}
        />
        {/* 빈이미지 서울 옆 */}
        <MainPanel
          {...data}
          panelXpos={-2}
          panelYpos={-1}
          areaImg={areaImgs[17]}
        />
      </S.Wrapper>
    </S.Container>
  );
}
