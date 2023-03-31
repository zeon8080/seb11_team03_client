import { Dispatch, SetStateAction } from "react";
import { ICreateBoardInput } from "../../../../commons/types/generated/types";
import { ISlideSetting } from "../../../units/eatsMe/routeWrite/top/routeWriteTop";

interface IProps {
  position: any;
  isSearch: boolean;
  isWrite?: boolean;
  data?: any;
  setMap?: Dispatch<any>;
  map?: any;
  idx?: number | undefined;
  path?: ICreateBoardInput;
  marker?: any[];
  keyword?: string;
  infoWindow?: any[];
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
  const onClickAdd = (props: IProps): void => {
    if (props.idx === 0) {
      props.setPath?.((prev) => ({
        ...prev,
        startArea: String(props.data.upperAddrName) + "시",
        startPoint: props.data.middleAddrName,
      }));
    } else if (props.idx === 1) {
      props.setPath?.((prev) => ({
        ...prev,
        endArea: String(props.data.upperAddrName) + "시",
        endPoint: props.data.middleAddrName,
      }));
    }
    props.setPath?.((prev) => ({
      ...prev,
      info: prev.info.map((el, idx) => {
        if (idx === props.idx)
          return {
            ...el,
            section: props.data.middleAddrName,
            area: String(props.data.upperAddrName) + "시",
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
    const defaultInfo = {
      restaurantName: "상호명",
      recommend: "",
      imgUrl: "",
      location: {
        lat: 0,
        lng: 0,
      },
    };
    props.setSlideSetting?.((prev) => ({
      ...prev,
      nowPage: prev.nowPage - 1,
      isFindRoad: true,
    }));
    props.setPath?.((prev) => {
      const info = [...prev.info];
      info.splice(props.idx ?? 0, 1);
      info.push(defaultInfo);
      return { ...prev, info };
    });
  };
  return { onClickAdd, onClickDelete };
};
