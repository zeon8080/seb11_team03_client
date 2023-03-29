import { Modal } from "antd";
import { mapMarker } from "./mapMarker";
declare const window: typeof globalThis & {
  Tmapv2: any;
};

export const mapSearh = (props: any) => () => {
  const onClickSearch = (): void => {
    const optionObj = {
      reqCoordType: "WGS84GEO",
      resCoordType: "WGS84GEO",
      centerLon: 126.98702028,
      centerLat: 37.5652045,
    };
    const params = {
      onComplete,
      onError,
    };
    const tData = new window.Tmapv2.extension.TData();
    tData.getPOIDataFromSearchJson(
      encodeURIComponent(props.keyword + "음식점"),
      optionObj,
      params
    );
  };

  const onComplete = (data) => {
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
