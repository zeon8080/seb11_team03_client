import { Dispatch, SetStateAction } from "react";
import * as S from "./locationSelectorStyles";

interface ILocationSelectorProps {
  setLocation: Dispatch<SetStateAction<string>>;
}

export default function LocationSelector(
  props: ILocationSelectorProps
): JSX.Element {
  const location = [
    "서울특별시",
    "부산광역시",
    "대구광역시",
    "인천광역시",
    "광주광역시",
    "대전광역시",
    "울산광역시",
    "경기도",
    "강원도",
    "충청북도",
    "충청남도",
    "전라북도",
    "전라남도",
    "경상북도",
    "경상남도",
    "제주도",
  ];
  return (
    <div>
      <S.SelectList>
        {location.map((el) => (
          <S.Location
            key={el}
            onClick={() => {
              props.setLocation(el);
            }}
          >
            {el}
          </S.Location>
        ))}
      </S.SelectList>
    </div>
  );
}
