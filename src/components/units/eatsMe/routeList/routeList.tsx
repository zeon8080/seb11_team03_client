import RouteListMiddle from "./middle/routeListMiddle";
import RouteListTop from "./top/routeListTop";

export default function RouteList(): JSX.Element {
  return (
    <>
      <RouteListTop />
      <RouteListMiddle />
    </>
  );
}
