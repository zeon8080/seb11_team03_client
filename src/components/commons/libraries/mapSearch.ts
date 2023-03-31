import { ISlideSetting } from "./../../units/eatsMe/routeWrite/top/routeWriteTop";
import { ICreateBoardInput } from "./../../../commons/types/generated/types";
import { Modal } from "antd";
import { Dispatch, SetStateAction } from "react";
import { mapMarker } from "./mapMarker";
declare const window: typeof globalThis & {
  Tmapv2: any;
};

interface IMapSearchProps {
  map: any;
  setMap: Dispatch<any>;
  keyword: string;
  idx: number;
  path: ICreateBoardInput;
  setPath: Dispatch<SetStateAction<ICreateBoardInput>>;
  marker: any[];
  setMarker: Dispatch<SetStateAction<any[]>>;
  infoWindow: any[];
  setInfoWindow: Dispatch<SetStateAction<any[]>>;
  isSearch: boolean;
  setSlideSetting: Dispatch<SetStateAction<ISlideSetting>>;
}

export const mapSearh = (props: IMapSearchProps) => () => {
  const onClickSearch = (): void => {
    const optionObj = {
      reqCoordType: "WGS84GEO",
      resCoordType: "WGS84GEO",
      count: 40,
    };
    const params = {
      onComplete,
      onError,
    };
    const tData = new window.Tmapv2.extension.TData();
    tData.getPOIDataFromSearchJson(
      encodeURIComponent(props.keyword),
      optionObj,
      params
    );
  };

  const onComplete = (data: any): void => {
    console.log(data, "체크체크");
    mapMarker({
      ...props,
      data: data._responseData.searchPoiInfo.pois.poi,
    });
  };
  const onError = (): void => {
    Modal.error({
      title: "해당하는 음식점이 없습니다",
      okText: "확인",
      okButtonProps: { style: { backgroundColor: "#fbb240", color: "white" } },
    });
  };
  onClickSearch();
};
