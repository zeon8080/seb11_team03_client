import { useEffect } from "react";

declare const window: typeof globalThis & {
  Tmapv2: any;
};

export const useEffectTmapLoadReserve = (args: any): void => {
  useEffect(() => {
    const initTmap = (): void => {
      const TMap = new window.Tmapv2.Map("TMapApp", {
        center: new window.Tmapv2.LatLng(37.5666805, 126.9784147),
        width: "100%",
        height: "100%",
        zoom: 15,
        zIndexInfoWindow: 11,
      });
      args.setMap(TMap);
    };
    initTmap();
  }, []);
};
