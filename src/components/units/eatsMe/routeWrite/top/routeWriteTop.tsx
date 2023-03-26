import { Modal } from "antd";
import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import * as S from "./routeWriteTopStyles";

type ICourse = Record<
  number,
  {
    title: string;
    isActive: boolean;
    word: string;
    store: string;
    menu: string;
    imgUrl: {
      uri: string;
    };
  }
>;

export default function RouteWriteTop(): JSX.Element {
  const [initialArr, setInitialArr] = useState([0, 1, 2]);
  const ImgRef = useRef<HTMLInputElement>(null);
  const [, setFile] = useState<File>();
  const [slideSetting, setSlideSetting] = useState({
    slideNum: 0,
    disabled_next: true,
    disabled_prev: true,
  });
  const [path, setPath] = useState({
    title: "",
    isActive: true,
    word: "",
    store: "상호명",
    menu: "",
    imgUrl: { uri: "" },
  });
  const [course, setCourse] = useState<ICourse>({});

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (): void => {
    setIsModalOpen(true);
  };
  const handleOk = (): void => {
    setIsModalOpen(false);
  };
  const handleCancel = (): void => {
    setIsModalOpen(false);
  };

  // 슬라이드 버튼이 할 일
  const onPrev = (): void => {
    // 첫 슬라이드에서 뒤로 가는 기능 막기
    if (Math.abs(slideSetting.slideNum) === 1) {
      setSlideSetting((prev) => ({
        ...prev,
        disabled_prev: true,
        slideNum: 0,
      }));
    }
    // 첫 슬라이드로 돌아 올시 코스제목이 있다면 다음버튼 활성화
    if (Math.abs(slideSetting.slideNum) === 1) {
      if (path.title.length !== 0) {
        setSlideSetting((prev) => ({
          ...prev,
          disabled_next: false,
        }));
      }
    }
    // 앞 슬이이드에 데이터가 있을 경우 다음 버튼 활성화
    if (course[Math.abs(slideSetting.slideNum)] !== undefined) {
      setSlideSetting((prev) => ({
        ...prev,
        disabled_next: false,
      }));
    }

    // 돌아 온 슬라이드가 출발지 일경우
    if (Math.abs(slideSetting.slideNum) >= 2) {
      setPath({
        ...path,
        ...course[Math.abs(slideSetting.slideNum) - 1],
      });
    }
    setSlideSetting((prev) => ({
      ...prev,
      slideNum: slideSetting.slideNum + 1,
    }));
    pathRegister();
  };

  const onNext = (): void => {
    // 다음 버튼 클릭시 첫번째 슬라이드가 아닐 경우 이전 버튼 활성화
    if (slideSetting.slideNum <= 0) {
      setSlideSetting((prev) => ({
        ...prev,
        disabled_prev: false,
      }));
    }
    // 검색창에 내용이 있을 경우 다음 버튼 활성화
    if (path.word.length !== 0) {
      setSlideSetting((prev) => ({
        ...prev,
        disabled_next: false,
      }));
    }
    // 다음 버튼 클릭시 경로 등록 슬라이드 생성 제한
    if (Math.abs(slideSetting.slideNum) > 5) {
      setSlideSetting((prev) => ({
        ...prev,
        disabled_next: true,
      }));
    }

    // 현재 슬라이드에 검색어가 있으면 다음버튼 활성화
    if (path.word.length !== 0) {
      setSlideSetting((prev) => ({
        ...prev,
        disabled_next: false,
      }));
    } else if (
      course[Math.abs(slideSetting.slideNum) + 1]?.word.length === 0 ||
      course[Math.abs(slideSetting.slideNum) + 1]?.word === undefined
    ) {
      setSlideSetting((prev) => ({
        ...prev,
        disabled_next: true,
      }));
    }

    // 다음 슬라이드에 입력된 값이 있을 경우
    if (course[Math.abs(slideSetting.slideNum) + 1] !== undefined) {
      console.log(path, course, course[Math.abs(slideSetting.slideNum) + 1]);
      setPath({
        ...path,
        ...course[Math.abs(slideSetting.slideNum) + 1],
      });
    } else {
      // 다음 슬라이드에 입력된 값이 없을 경우
      // 다음 버튼 클릭시 기존의 input창 초기화
      setPath((prev) => ({
        title: prev.title,
        isActive: true,
        word: "",
        store: "상호명",
        menu: "",
        imgUrl: { uri: "" },
      }));
    }
    // 다음 버튼 클릭시 슬라이드 넘버 변경
    setSlideSetting((prev) => ({
      ...prev,
      slideNum: slideSetting.slideNum - 1,
    }));

    pathRegister();
  };

  const pathRegister = (): void => {
    // 슬라이드 이동시 안의 경로 데이터를 저장
    if (Math.abs(slideSetting.slideNum) >= 1) {
      setCourse((prev) => ({
        ...prev,
        [Math.abs(slideSetting.slideNum)]: path,
      }));
    }
  };

  // 코스 이름의 내용이 들어 오면 이동 버튼 활성화
  const onNameWrite = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value;
    // 코스제목 체크후 다음 버튼 활성화
    if (e.currentTarget.value.trim().length > 0) {
      setSlideSetting((prev) => ({
        ...prev,
        disabled_next: false,
      }));
    }
    setPath((prev) => ({ ...prev, title: value }));
  };

  // 다음 버튼 클릭시 출발지, 도착지를 넘겼을 경우 다음 슬라이드 추가
  useEffect(() => {
    if (
      Math.abs(slideSetting.slideNum) >= 2 &&
      Math.abs(slideSetting.slideNum) <= 6
    ) {
      setInitialArr((prev) => [...prev, prev[prev.length - 1] + 1]);
    }
  }, [slideSetting.slideNum, setInitialArr]);

  // 상호 검색 활성화 함수, 등록버튼 활성화
  const onSearch: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >["onChange"] &
    DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >["onKeyUp"] = (e) => {
    const value = e.currentTarget.value;
    setPath((prev) => ({
      ...prev,
      word: value,
    }));
    // 검색어 들어있을 경우 다음 버튼 활성화
    if (value.trim().length > 0) {
      // 출발지, 도착지를 받을 경우 코스등록 버튼 활성화
      if (Math.abs(slideSetting.slideNum) >= 2) {
        setPath((prev) => ({
          ...prev,
          isActive: false,
        }));
      }
      setSlideSetting((prev) => ({
        ...prev,
        disabled_next: false,
      }));
    }
  };
  // 추천 메뉴 함수
  const onMenu = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value;
    setPath((prev) => ({
      ...prev,
      menu: value,
    }));
  };

  // 이미지 등록 버튼
  const onImg = (): void => {
    ImgRef.current?.click();
  };

  const onFile = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file === undefined) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      if (typeof e.target?.result === "string") {
        const imgObj = { uri: e.target?.result };
        setPath((prev) => ({
          ...prev,
          imgUrl: imgObj,
        }));
        setFile(file);
      }
    };
  };

  const onRegister = (): void => {
    setCourse({});
    setPath({
      title: "",
      isActive: true,
      word: "",
      store: "상호명",
      menu: "",
      imgUrl: { uri: "" },
    });
    setSlideSetting({
      slideNum: 0,
      disabled_next: true,
      disabled_prev: true,
    });
    setIsModalOpen(false);
  };

  return (
    <S.Container>
      <S.BtnWrap>
        <S.PrevBtn onClick={onPrev} disabled={slideSetting.disabled_prev} />
        <S.NextBtn onClick={onNext} disabled={slideSetting.disabled_next} />
      </S.BtnWrap>
      <S.StyledSlider>
        {initialArr.map((el, idx) =>
          el === 0 ? (
            // 코스 타이틀 작성
            <S.RouteBox slideNum={slideSetting.slideNum} key={idx}>
              <input
                className="title"
                type="text"
                placeholder="코스 이름을 정해주세요."
                onChange={onNameWrite}
                maxLength={35}
                value={path.title}
              />
            </S.RouteBox>
          ) : (
            // 경유지
            <S.RouteBox slideNum={slideSetting.slideNum} key={idx}>
              <S.SearchContainer>
                <S.SearchWrap word={path.word}>
                  <input
                    type="text"
                    placeholder={
                      Math.abs(slideSetting.slideNum) === 1
                        ? "출발지를 입력해주세요."
                        : Math.abs(slideSetting.slideNum) === 2
                        ? "도착지를 입력해주시요."
                        : "경유지를 입력해주세요."
                    }
                    onChange={onSearch}
                    onKeyDown={onSearch}
                    value={path.word}
                  />
                  <button></button>
                </S.SearchWrap>
                <S.StoreWrap>
                  <S.Store type="text" readOnly value={path.store} />
                  <S.Menu
                    type="text"
                    placeholder="추천메뉴"
                    onChange={onMenu}
                    value={path.menu}
                  />
                </S.StoreWrap>
              </S.SearchContainer>
              <S.ImgWrap onClick={onImg} imgUrl={path.imgUrl.uri}>
                {path.imgUrl.uri !== "" ? <img src={path.imgUrl.uri} /> : ""}
                <input type="file" ref={ImgRef} onChange={onFile} />
              </S.ImgWrap>
              <S.RegisterBtn disabled={path.isActive} onClick={showModal}>
                코스완료
              </S.RegisterBtn>
            </S.RouteBox>
          )
        )}
      </S.StyledSlider>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={400}
        footer={null}
        closable={false}
      >
        <S.Text>코스 등록을 하시겠습니까?</S.Text>
        <S.ModalBtnWrap>
          <button onClick={handleCancel}>취소</button>
          <button onClick={onRegister}>등록</button>
        </S.ModalBtnWrap>
      </Modal>
    </S.Container>
  );
}
