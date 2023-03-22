import * as S from "./routeWriteTopStyles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { KeyboardEvent, useEffect, useState } from "react";
import LocationSelector from "../../../../locationSelector/locationSelector";

interface IBtn {
  className: string;
  currentSlide: number;
  onClick: () => void;
}

export default function RouteWriteTop(): JSX.Element {
  const [startLocation, setStartLocation] = useState("출발지");
  const [endLocation, setEndLocation] = useState("도착지");
  const [startArea, setStartArea] = useState(false);
  const [endArea, setEndArea] = useState(false);
  const [prevActive, setPrevActive] = useState(true);
  const [nextActive, setNextActive] = useState(true);

  const PrevBtn = (props: IBtn): JSX.Element => {
    const { currentSlide, className, onClick } = props;
    return (
      <S.PrevBtn
        {...props}
        disabled={prevActive}
        onClick={() => {
          onClick();
          onPrev(currentSlide);
        }}
        className={className}
      />
    );
  };

  const NextBtn = (props: IBtn): JSX.Element => {
    const { className, onClick } = props;
    return (
      <S.NextBtn
        disabled={nextActive}
        onClick={() => {
          onClick();
          onNext();
        }}
        className={className}
      />
    );
  };

  const onPrev = (currentSlide: number): void => {
    console.log("이전 클릭됨");
    if (currentSlide - 1 === 0) {
      setPrevActive(true);
    }
    setNextActive(false);
  };

  const onNext = (): void => {
    console.log("다음 클릭됨");
    setNextActive(true);
    setPrevActive(false);
  };

  const settings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextBtn className={""} onClick={() => {}} currentSlide={0} />,
    prevArrow: <PrevBtn className={""} onClick={() => {}} currentSlide={0} />,
  };

  // 코스 이름의 내용이 들어 오면 이동 버튼 활성화
  const onInput1 = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.currentTarget.value.trim().length > 0) {
      setNextActive(false);
    } else {
      setNextActive(true);
    }
  };

  const onStart = (): void => {
    setStartArea((prev) => !prev);
  };

  const onEnd = (): void => {
    setEndArea((prev) => !prev);
  };

  // 출발지와 도착지가 전부 들어가면 다음 버튼 활성화
  useEffect(() => {
    console.log(startLocation, endLocation);
    if (startLocation !== "출발지" && endLocation !== "도착지") {
      setNextActive(false);
    }
  }, [startLocation, endLocation]);

  return (
    <S.Container>
      <S.StyledSlider {...settings}>
        {/* 코스 제목 */}
        <S.RouteBox>
          <input
            className="title"
            type="text"
            placeholder="코스 이름을 정해주세요."
            onKeyUp={onInput1}
          />
        </S.RouteBox>

        {/* 출발지 => 도착지 */}
        <S.RouteBox>
          <S.SelectBtn
            className="start"
            onClick={onStart}
            startArea={startArea}
          >
            {startLocation}
          </S.SelectBtn>
          <span className="arrow"></span>
          <S.SelectBtn className="end" onClick={onEnd} endArea={endArea}>
            {endLocation}
          </S.SelectBtn>
        </S.RouteBox>

        {/* 경로 */}
        <S.RouteBox>
          <S.SearchContainer>
            <S.SearchWrap>
              <input type="text" placeholder="경유지를 입력해주세요." />
              <button>검색</button>
            </S.SearchWrap>
            <S.StoreWrap>
              <input className="name" type="text" readOnly value="상호명" />
              <input className="menu" type="text" readOnly value="추천메뉴" />
            </S.StoreWrap>
          </S.SearchContainer>
          <S.ImgWrap>
            <img src="" />
            <input type="file" />
          </S.ImgWrap>
          <S.RegisterBtn>등록</S.RegisterBtn>
        </S.RouteBox>
      </S.StyledSlider>

      {/* 선택창 */}
      <S.StartSelect className={startArea ? "start" : ""} onClick={onStart}>
        <LocationSelector setLocation={setStartLocation} />
      </S.StartSelect>
      <S.EndSelect className={endArea ? "end" : ""} onClick={onEnd}>
        <LocationSelector setLocation={setEndLocation} />
      </S.EndSelect>
    </S.Container>
  );
}
