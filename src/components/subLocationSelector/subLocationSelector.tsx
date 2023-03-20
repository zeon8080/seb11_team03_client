import { Dispatch, SetStateAction } from "react";
import * as S from "./subLocationSelectorStyles";

interface ILocationSelectorProps {
  setSubLocation: Dispatch<SetStateAction<string>>;
}

export default function SubLocationSelector(
  props: ILocationSelectorProps
): JSX.Element {
  const subLocation = [
    "강남구",
    "강동구",
    "강북구",
    "강서구",
    "관악구",
    "광진구",
    "구로구",
    "금천구",
    "노원구",
    "도봉구",
    "동대문구",
    "동작구",
    "마포구",
    "서대문구",
    "서초구",
    "성동구",
    "성북구",
    "송파구",
    "양천구",
    "영등포구",
    "용산구",
    "은평구",
    "종로구",
    "중구",
    "중랑구",
  ];
  return (
    <div>
      <S.SelectList>
        {subLocation.map((el) => (
          <S.Location
            key={el}
            onClick={() => {
              props.setSubLocation(el);
            }}
          >
            {el}
          </S.Location>
        ))}
      </S.SelectList>
    </div>
  );
}
