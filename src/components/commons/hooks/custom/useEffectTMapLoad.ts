import { mapFindRoad } from "./../../libraries/mapFindRoad";
import { mapMarker } from "../../libraries/mapMarker";
import { Dispatch, SetStateAction, useEffect } from "react";

declare const window: typeof globalThis & {
  Tmapv2: any;
};

interface IUseEffectTMapLoadProps {
  isSearch: boolean;
  data: any;
  setMap: Dispatch<any>;
  map?: any;
  marker?: any[];
  setMarker?: Dispatch<SetStateAction<any[]>>;
  findLine?: any[];
  setFindLine?: Dispatch<SetStateAction<any[]>>;
  setInfoWindow?: Dispatch<SetStateAction<any[]>>;
}

export const useEffectTMapLoad = (props: IUseEffectTMapLoadProps): void => {
  useEffect(() => {
    if (props.data !== undefined) {
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
