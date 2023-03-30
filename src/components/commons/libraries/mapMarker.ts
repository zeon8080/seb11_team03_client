import { SetStateAction, Dispatch } from "react";
import { ICreateBoardInput } from "../../../commons/types/generated/types";
import { ISlideSetting } from "../../units/eatsMe/routeWrite/top/routeWriteTop";
import { mapPopUp } from "./mapPopUp";
declare const window: typeof globalThis & {
  Tmapv2: any;
};

export interface IMapMarkerProps {
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

export const mapMarker = (props: IMapMarkerProps): void => {
  if (props.marker?.length !== 0) {
    props.marker?.map((el) => el.setMap(null));
  }

  const addIcon = (i: number): string => {
    if (props.isSearch) {
      return "/marker_gr.webp";
    } else if (i === 0) {
      return "/marker_red.webp";
    } else if (
      Object.prototype.hasOwnProperty.call(props, "isWrite") &&
      i === 1
    ) {
      return "/marker_purple.webp";
    } else if (
      !Object.prototype.hasOwnProperty.call(props, "isWrite") &&
      i === props.data.info.length - 1
    ) {
      return "/marker_purple.webp";
    } else {
      return "/marker_or.webp";
    }
  };

  const PTbounds = new window.Tmapv2.LatLngBounds();
  const markerArr = [];
  for (
    let i = 0;
    i < (props.isSearch ? props.data.length : props.data.info.length);
    i++
  ) {
    if (!props.isSearch && props.data.info[i].restaurantName === "상호명") {
      break;
    }
    if (
      props.isSearch &&
      (props.idx ?? 0) > 0 &&
      props.data[i].name ===
        props.path?.info[(props.idx ?? 0) - 1].restaurantName
    ) {
      continue;
    }
    const position = new window.Tmapv2.LatLng(
      props.isSearch ? props.data[i].noorLat : props.data.info[i].location.lat,
      props.isSearch ? props.data[i].noorLon : props.data.info[i].location.lng
    );
    const TMarker = new window.Tmapv2.Marker({
      position,
      icon: addIcon(i),
      iconSize: new window.Tmapv2.Size(40, 40),
      map: props.map,
      title: "가게 정보보기",
    });

    if (props.isSearch) {
      TMarker.addListener("click", () => {
        mapPopUp({ ...props, position, data: props.data[i] });
      });
    } else {
      TMarker.addListener("click", () => {
        mapPopUp({ ...props, position, data: props.data.info[i], idx: i });
      });
    }
    markerArr.push(TMarker);
    PTbounds.extend(position);
  }

  if (!props.isSearch && props.data.info[0].restaurantName === "상호명") {
    return;
  }
  if (
    Object.prototype.hasOwnProperty.call(props, "isWrite") &&
    props.data.info[1].restaurantName === "상호명"
  ) {
    const latlng = props.data.info[0].location;

    props.map.setCenter(new window.Tmapv2.LatLng(latlng.lat, latlng.lng));
    props.setMarker?.(markerArr);
    return props.map.setZoom(15);
  }
  props.map.fitBounds(PTbounds);
  props.setMarker?.(markerArr);
};
