import { ISlideSetting } from "../../../units/eatsMe/routeWrite/top/routeWriteTop";
import { Dispatch, SetStateAction } from "react";
import { ICreateBoardInput } from "../../../../commons/types/generated/types";

interface IProps {
  position?: any;
  isSearch?: boolean;
  isWrite?: boolean;
  data?: any;
  setMap?: Dispatch<any>;
  map?: any;
  idx?: number | undefined;
  path?: ICreateBoardInput;
  marker?: any[];
  keyword?: string;
  infoWindow?: any[];
  slideSetting?: ISlideSetting;
  setSlideSetting?: Dispatch<SetStateAction<ISlideSetting>>;
  setMarker?: Dispatch<SetStateAction<any[]>>;
  findLine?: any[];
  setFindLine?: Dispatch<SetStateAction<any[]>>;
  setInfoWindow?: Dispatch<SetStateAction<any[]>>;
  setPath?: Dispatch<SetStateAction<ICreateBoardInput>>;
}

interface IUseClickInfoWindow {
  onClickAdd: (props: IProps) => void;
  onClickDelete: (props: IProps) => void;
}

export const useClickInfoWindow = (): IUseClickInfoWindow => {
  const area: Record<string, string> = {
    서울: "서울시",
    부산: "부산시",
    대구: "대구시",
    인천: "인천시",
    광주: "광주시",
    대전: "대전시",
    울산: "울산시",
    경기: "경기도",
    강원: "강원도",
    충북: "충청북도",
    충남: "충청남도",
    전북: "전라북도",
    전남: "전라남도",
    경북: "경상북도",
    경남: "경상남도",
    제주: "제주도",
  };

  const onClickAdd = (props: IProps): void => {
    if (props.idx === 0) {
      props.setPath?.((prev) => ({
        ...prev,
        startArea: area[props.data.upperAddrName],
        startPoint: props.data.middleAddrName.split(" ")[0],
      }));
    } else if (props.idx === 1) {
      props.setPath?.((prev) => ({
        ...prev,
        endArea: area[props.data.upperAddrName],
        endPoint: props.data.middleAddrName.split(" ")[0],
      }));
    }
    props.setPath?.((prev) => ({
      ...prev,
      info: prev.info.map((el, idx) => {
        if (idx === props.idx)
          return {
            ...el,
            section: props.data.middleAddrName,
            area: area[props.data.upperAddrName],
            restaurantName: props.data.name,
            location: {
              lat: Number(props.data.noorLat),
              lng: Number(props.data.noorLon),
            },
          };
        return { ...el };
      }),
    }));
  };

  const onClickDelete = (props: IProps): void => {
    const defaultInfo: any = {
      restaurantName: "상호명",
      recommend: "",
      imgUrl: "",
      location: {
        lat: 0,
        lng: 0,
      },
    };

    props.setSlideSetting?.((prev) => {
      if (prev.nowPage !== 0) {
        return { ...prev, nowPage: prev.nowPage - 1 };
      } else {
        return prev;
      }
    });

    props.setPath?.((prev) => {
      const info = [...prev.info];
      info.splice(props.idx ?? 0, 1);
      info.push(defaultInfo);
      return { ...prev, info };
    });
  };

  return { onClickAdd, onClickDelete };
};
