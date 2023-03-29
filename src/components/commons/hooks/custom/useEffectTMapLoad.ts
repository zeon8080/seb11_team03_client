import { mapFindRoad } from "./../../libraries/mapFindRoad";
import { mapMarker } from "../../libraries/mapMarker";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  Tmapv2: any;
};

export const useEffectTMapLoad = (props: any): void => {
  useEffect(() => {
    if (props.data !== undefined || props.isSearch) {
      console.log(props.isList);
      const initTmap = (): void => {
        const TMap = new window.Tmapv2.Map("TMapApp", {
          center: new window.Tmapv2.LatLng(37.5666805, 126.9784147),
          width: "100%",
          height: "100%",
          zoom: 15,
          zIndexInfoWindow: 11,
        });
        if (!props.isSearch) {
          mapMarker({ ...props, map: TMap });
          mapFindRoad({ ...props, map: TMap });
        }
        props.setMap(TMap);
      };
      initTmap();
    }
  }, []);
};
