import { ICreateBoardInput } from "./../../../../commons/types/generated/types";
import { Dispatch, SetStateAction, useState } from "react";

export const usePathState = (): [
  ICreateBoardInput,
  Dispatch<SetStateAction<any>>
] => {
  const [path, setPath] = useState({
    title: "",
    boardImg: "",
    startPoint: "",
    endPoint: "",
    area: "",
    like: 0,
    info: [
      {
        restaurantName: "상호명",
        recommend: "",
        imgUrl: "",
        location: {
          lat: 0,
          lng: 0,
        },
      },
      {
        restaurantName: "상호명",
        recommend: "",
        imgUrl: "",
        location: {
          lat: 0,
          lng: 0,
        },
      },
      {
        restaurantName: "상호명",
        recommend: "",
        imgUrl: "",
        location: {
          lat: 0,
          lng: 0,
        },
      },
      {
        restaurantName: "상호명",
        recommend: "",
        imgUrl: "",
        location: {
          lat: 0,
          lng: 0,
        },
      },
      {
        restaurantName: "상호명",
        recommend: "",
        imgUrl: "",
        location: {
          lat: 0,
          lng: 0,
        },
      },
    ],
  });
  return [path, setPath];
};
