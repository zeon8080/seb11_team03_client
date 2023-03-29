import { useState } from "react";
import RouteWriteMiddle from "./middle/routeWriteMiddle";
import RouteWriteTop from "./top/routeWriteTop";

export default function RouteWrite(): JSX.Element {
  const [map, setMap] = useState();
  return (
    <>
      <RouteWriteTop map={map} setMap={setMap} />
      <RouteWriteMiddle setMap={setMap} />
    </>
  );
}
