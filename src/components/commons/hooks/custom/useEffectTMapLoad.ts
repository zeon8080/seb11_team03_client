import { mapFindRoad } from "./../../libraries/mapFindRoad";
import { mapMarker } from "./../../libraries/mapMarker";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  Tmapv2: any;
};

export const useEffectTMapLoad = (props: any): void => {
  useEffect(() => {
    if (props.data !== undefined) {
      const initTmap = (): void => {
        const TMap = new window.Tmapv2.Map("TMapApp", {
          center: new window.Tmapv2.LatLng(
            props.data.pos[0].Lat,
            props.data.pos[0].Lng
          ),
          width: "100%",
          height: "100%",
          zoom: 15,
          zIndexInfoWindow: 11,
        });
        mapMarker({ ...props, map: TMap });
        mapFindRoad({ ...props, map: TMap });
        props.setMap(TMap);
      };
      initTmap();
    }
  }, []);
};
