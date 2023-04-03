import { useState } from "react";
import PopularListMiddle from "./middle/popularListMiddle";
import PopularListTop from "./top/popularListTop";

export default function PopularList(): JSX.Element {
  const [location, setLocation] = useState();
  return (
    <>
      <PopularListTop setLocation={setLocation} />
      <PopularListMiddle location={location} />
    </>
  );
}
