import { mapPopUp } from "./mapPopUp";
declare const window: typeof globalThis & {
  Tmapv2: any;
};

export const mapMarker = (props) => {
  if (props.marker.length !== 0) {
    props.marker.map((el) => el.setMap(null));
    props.setMarker([]);
  }

  const addIcon = (i: number): string => {
    if (i === 0) {
      return "/marker_red.webp";
    } else if (i === props.data.pos.length - 1) {
      return "/marker_puple.webp";
    } else {
      return "/marker_or.webp";
    }
  };

  const PTbounds = new window.Tmapv2.LatLngBounds();
  for (let i = 0; i < props.data.pos.length; i++) {
    const position = new window.Tmapv2.LatLng(
      props.data.pos[i].Lat,
      props.data.pos[i].Lng
    );

    const TMarker = new window.Tmapv2.Marker({
      position,
      icon: addIcon(i),
      iconSize: new window.Tmapv2.Size(40, 40),
      map: props.map,
      title: "가게 정보보기",
    });

    TMarker.addListener("click", () => {
      mapPopUp({ ...props, position });
    });

    props.setMarker((prev) => [...prev, TMarker]);
    PTbounds.extend(position);
  }
  props.map.fitBounds(PTbounds);
};
