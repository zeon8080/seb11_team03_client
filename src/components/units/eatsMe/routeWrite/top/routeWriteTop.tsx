import { Modal } from "antd";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { usePathState } from "../../../../commons/hooks/custom/usePathState";
import { useSetIsToggle } from "../../../../commons/hooks/custom/useSetIsToggle";
import { mapFindRoad } from "../../../../commons/libraries/mapFindRoad";
import { mapMarker } from "../../../../commons/libraries/mapMarker";
import { mapSearh } from "../../../../commons/libraries/mapSearch";
import * as S from "./routeWriteTopStyles";

export default function RouteWriteTop(props: any): JSX.Element {
  const imgRef = useRef<HTMLInputElement>(null);
  const [, setFile] = useState<File>();
  const [isToggle, changeIsToggle] = useSetIsToggle();
  const [marker, setMarker] = useState<any[]>([]);
  const [pickMarker, setPickMarker] = useState<any[]>([]);
  const [infoWindow, setInfoWindow] = useState<any[]>([]);
  const [findLine, setFindLine] = useState<any[]>([]);
  const [path, setPath] = usePathState();
  const [slideSetting, setSlideSetting] = useState({
    keyword: ["", "", "", "", "", ""],
    nowPage: 0,
    isActive: true,
    disabled_next: true,
    disabled_prev: true,
  });

  useEffect(() => {
    if (marker.length !== 0) {
      marker.map((el) => el.setMap(null));
      mapMarker({
        data: path,
        isSearch: false,
        isWrite: true,
        map: props.map,
        setMap: props.setMap,
        marker: pickMarker,
        setMarker: setPickMarker,
        setInfoWindow,
        setSlideSetting,
        setPath,
      });
      if (path.info[1].restaurantName !== "상호명") {
        mapFindRoad({
          data: path,
          isWrite: true,
          map: props.map,
          findLine,
          setFindLine,
        });
      } else {
        findLine.map((el) => el.setMap(null));
        setFindLine([]);
      }
    }
    if (
      slideSetting.nowPage !== 0 &&
      path.info[slideSetting.nowPage - 1].restaurantName !== "상호명"
    ) {
      if (slideSetting.nowPage + 1 < 6 && slideSetting.nowPage !== 0) {
        setSlideSetting((prev) => ({ ...prev, disabled_next: false }));
      }
      if (slideSetting.nowPage >= 2) {
        setSlideSetting((prev) => ({ ...prev, isActive: false }));
      }
    } else if (slideSetting.nowPage === 0 && path.title !== "") {
      setSlideSetting((prev) => ({
        ...prev,
        disabled_next: false,
        disabled_prev: true,
      }));
    } else {
      setSlideSetting((prev) => ({
        ...prev,
        disabled_next: true,
        isActive: true,
      }));
    }
  }, [path.info]);

  useEffect(() => {
    if (infoWindow.length > 1) {
      infoWindow[0].setMap(null);
      setInfoWindow([infoWindow[1]]);
    }
  }, [infoWindow]);

  const onChangeInput = (pageNum: any) => (event: any) => {
    if (pageNum === 0) {
      setPath((prev: any) => ({ ...prev, title: event.target.value }));
      setSlideSetting((prev) => ({ ...prev, disabled_next: false }));
    } else if (event.target.id === "recommend") {
      setPath((prev: any) => ({
        ...prev,
        info: prev.info.map((el: any, idx: any) => {
          if (pageNum - 1 === idx)
            return {
              ...el,
              recommend: event.target.value,
            };
          return { ...el };
        }),
      }));
    } else {
      setSlideSetting((prev) => ({
        ...prev,
        keyword: prev.keyword.map((el, idx) => {
          if (idx === pageNum - 1) {
            return event.target.value;
          } else {
            return el;
          }
        }),
      }));
    }
  };

  const onClickNext = (): void => {
    console.log("들어옴??", infoWindow);
    if (infoWindow.length > 0) {
      infoWindow[0].setVisible(false);
    }
    if (marker.length > 1) {
      marker.map((el) => el.setMap(null));
    }

    if (path.info[slideSetting.nowPage].restaurantName === "상호명") {
      setSlideSetting((prev) => ({
        ...prev,
        disabled_next: true,
      }));
    }
    setSlideSetting((prev) => ({
      ...prev,
      disabled_prev: false,
      nowPage: prev.nowPage + 1,
    }));
  };

  const onClickPrev = (): void => {
    if (slideSetting.nowPage - 1 === 0) {
      setSlideSetting((prev) => ({
        ...prev,
        disabled_prev: true,
      }));
    }
    setSlideSetting((prev) => ({
      ...prev,
      disabled_next: false,
      nowPage: prev.nowPage - 1,
    }));
  };

  const onClickImg = (): void => {
    imgRef.current?.click();
  };

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file === undefined) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        setPath((prev: any) => ({
          ...prev,
          info: prev.info.map((el: any, idx: any) => {
            if (slideSetting.nowPage - 1 === idx)
              return {
                ...el,
                imgUrl: event.target?.result,
              };
            return { ...el };
          }),
        }));
        setFile(file);
      }
    };
  };

  return (
    <S.Container>
      <S.BtnWrap>
        <S.PrevBtn
          onClick={onClickPrev}
          disabled={slideSetting.disabled_prev}
        />
        <S.NextBtn
          onClick={onClickNext}
          disabled={slideSetting.disabled_next}
        />
      </S.BtnWrap>
      <S.StyledSlider>
        {slideSetting.keyword.map((_, idx) =>
          idx === 0 ? (
            // 코스 타이틀 작성
            <S.RouteBox nowPage={slideSetting.nowPage} key={idx}>
              <input
                className="title"
                type="text"
                placeholder="코스 이름을 정해주세요."
                onChange={onChangeInput(idx)}
                maxLength={35}
                value={path.title}
              />
            </S.RouteBox>
          ) : (
            // 경유지
            <S.RouteBox nowPage={slideSetting.nowPage} key={idx}>
              <S.SearchContainer>
                <S.SearchWrap keyword={slideSetting.keyword[idx - 1]}>
                  <input
                    type="text"
                    id={String(idx)}
                    placeholder={
                      idx === 1
                        ? "출발지를 입력해주세요."
                        : idx === 2
                        ? "도착지를 입력해주세요."
                        : "경유지를 입력해주세요."
                    }
                    onChange={onChangeInput(idx)}
                    value={slideSetting.keyword[idx - 1]}
                  />
                  <button
                    onClick={mapSearh({
                      map: props.map,
                      setMap: props.setMap,
                      keyword: slideSetting.keyword[idx - 1],
                      idx: idx - 1,
                      path,
                      setPath,
                      marker,
                      setMarker,
                      infoWindow,
                      setInfoWindow,
                      isSearch: true,
                    })}
                  ></button>
                </S.SearchWrap>
                <S.StoreWrap>
                  <S.Store
                    type="text"
                    readOnly
                    value={path.info[idx - 1].restaurantName}
                  />
                  <S.Menu
                    id="recommend"
                    type="text"
                    placeholder="추천메뉴"
                    onChange={onChangeInput(idx)}
                    value={path.info[idx - 1].recommend}
                  />
                </S.StoreWrap>
              </S.SearchContainer>

              <S.ImgWrap
                onClick={onClickImg}
                imgUrl={path.info[idx - 1].imgUrl}
              >
                {path.info[idx - 1].imgUrl !== "" ? (
                  <img src={path.info[idx - 1].imgUrl} />
                ) : (
                  ""
                )}
                <input type="file" ref={imgRef} onChange={onChangeFile} />
              </S.ImgWrap>
              <S.RegisterBtn
                disabled={slideSetting.isActive}
                onClick={changeIsToggle}
              >
                코스완료
              </S.RegisterBtn>
            </S.RouteBox>
          )
        )}
      </S.StyledSlider>
      {isToggle && (
        <Modal
          open={true}
          onOk={changeIsToggle}
          onCancel={changeIsToggle}
          width={400}
          footer={null}
          closable={false}
        >
          <S.Text>코스 등록을 하시겠습니까?</S.Text>
          <S.ModalBtnWrap>
            <button onClick={changeIsToggle}>취소</button>
            <button>등록</button>
          </S.ModalBtnWrap>
        </Modal>
      )}
    </S.Container>
  );
}
