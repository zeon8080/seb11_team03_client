import { mapPopUp } from "./mapPopUp";
declare const window: typeof globalThis & {
  Tmapv2: any;
};

export const mapMarker = (props: any): void => {
  if (props.marker.length !== 0) {
    props.marker.map((el: any) => el.setMap(null));
  }

  const addIcon = (i: number): string => {
    if (props.isSearch === true) {
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
    i < (props.isSearch === true ? props.data.length : props.data.info.length);
    i++
  ) {
    if (
      props.isSearch === false &&
      props.data.info[i].restaurantName === "상호명"
    ) {
      break;
    }

    if (
      props.isSearch === true &&
      props.data[i].name === props.path.info[props.idx].restaurantName
    ) {
      continue;
    }
    const position = new window.Tmapv2.LatLng(
      props.isSearch === true
        ? props.data[i].noorLat
        : props.data.info[i].location.lat,
      props.isSearch === true
        ? props.data[i].noorLon
        : props.data.info[i].location.lng
    );
    const TMarker = new window.Tmapv2.Marker({
      position,
      icon: addIcon(i),
      iconSize: new window.Tmapv2.Size(40, 40),
      map: props.map,
      title: "가게 정보보기",
    });

    if (props.isSearch === true) {
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

  if (
    props.isSearch !== true &&
    props.data.info[0].restaurantName === "상호명"
  ) {
    return;
  }
  if (
    Object.prototype.hasOwnProperty.call(props, "isWrite") &&
    props.data.info[1].restaurantName === "상호명"
  ) {
    const latlng = props.data.info[0].location;

    props.map.setCenter(new window.Tmapv2.LatLng(latlng.lat, latlng.lng));
    return props.map.setZoom(15);
  }
  props.map.fitBounds(PTbounds);
  props.setMarker(markerArr);
};
