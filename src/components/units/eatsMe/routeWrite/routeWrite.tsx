import RouteWriteMiddle from "./middle/routeWriteMiddle";
import RouteWriteTop from "./top/routeWriteTop";

export default function RouteWrite(): JSX.Element {
  return (
    <>
      <RouteWriteTop />
      <RouteWriteMiddle />
    </>
  );
}
