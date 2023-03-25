import axios from "axios";

declare const window: typeof globalThis & {
  Tmapv2: any;
};

export const mapFindRoad = (props: any): void => {
  if (props.findLine.length !== 0) {
    props.findLine.map((el) => el.setMap(null));
    props.setFindLine([]);
  }

  const drawData = (result: any): void => {
    for (let i = 0; i < result.features.length; i++) {
      const feature = result.features[i];
      if (feature.geometry.type === "LineString") {
        const path = [];
        for (let j = 0; j < feature.geometry.coordinates.length; j++) {
          const startPt = new window.Tmapv2.LatLng(
            feature.geometry.coordinates[j][1],
            feature.geometry.coordinates[j][0]
          );
          path.push(startPt);
        }
        const TLine = new window.Tmapv2.Polyline({
          path,
          strokeColor: "#457aff",
          strokeWeight: 4,
          map: props.map,
        });
        props.setFindLine((prev) => [...prev, TLine]);
      }
    }
  };

  const onClickTest = async (): Promise<void> => {
    const dataPos: any = {};
    console.log(props.data, "포스");
    for (let i = 0; i < props.data.pos.length; i++) {
      if (i === 0) {
        dataPos.start = props.data.pos[i];
      } else if (i === props.data.pos.length - 1) {
        dataPos.end = props.data.pos[i];
      } else {
        if (dataPos.stopOver === undefined) {
          dataPos.stopOver = `${props.data.pos[i].Lng},${props.data.pos[i].Lat}`;
        } else {
          dataPos.stopOver += `_${props.data.pos[i].Lng},${props.data.pos[i].Lat}`;
        }
      }
    }

    const result = await axios({
      method: "POST",
      headers: { appKey: "kzTmdjGzc91aQiicRAWjBCpCySY90Cs3AZJ7iVbd" },
      url: "https://apis.openapi.sk.com/tmap/routes?version=1&format=json",
      data: {
        startX: dataPos.start?.Lng,
        startY: dataPos.start?.Lat,
        endX: dataPos.end?.Lng,
        endY: dataPos.end?.Lat,
        passList: dataPos.stopOver,
        reqCoordType: "WGS84GEO",
        resCoordType: "WGS84GEO",
        trafficInfo: "Y",
      },
    });

    drawData(result.data);
  };
  void onClickTest();
};
