import { ISlideSetting } from "./../../../units/eatsMe/routeWrite/top/routeWriteTop";
import { useRouter } from "next/router";
import { mapFindRoad } from "./../../libraries/mapFindRoad";
import { mapMarker } from "../../libraries/mapMarker";
import { Dispatch, SetStateAction, useEffect } from "react";

declare const window: typeof globalThis & {
  Tmapv2: any;
};

interface IUseEffectTMapLoadProps {
  isWrite?: boolean;
  isSet?: boolean;
  isSearch?: boolean;
  data: any;
  setPath?: Dispatch<any>;
  setMap: Dispatch<any>;
  map?: any;
  marker?: any[];
  setMarker?: Dispatch<SetStateAction<any[]>>;
  findLine?: any[];
  setFindLine?: Dispatch<SetStateAction<any[]>>;
  slideSetting?: ISlideSetting;
  setSlideSetting?: Dispatch<SetStateAction<ISlideSetting>>;
  setInfoWindow?: Dispatch<SetStateAction<any[]>>;
}

export const useEffectTMapLoad = (props: IUseEffectTMapLoadProps): void => {
  const router = useRouter();
  useEffect(() => {
    const initTmap = (): void => {
      if (Object.keys(props.map).length === 0) {
        const TMap = new window.Tmapv2.Map("TMapApp", {
          center: new window.Tmapv2.LatLng(37.5666805, 126.9784147),
          width: "100%",
          height: "100%",
          zoom: 15,
          zIndexInfoWindow: 11,
        });
        props.setMap(TMap);
      }
      if (
        router.asPath !== "/eatsMe/routeWrite" &&
        props.isSet === true &&
        Object.keys(props.map).length !== 0
      ) {
        mapMarker({ ...props });
        mapFindRoad({ ...props });
      }
    };
    initTmap();
  }, [props.isSet]);
};
