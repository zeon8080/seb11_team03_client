import { useState } from "react";
export const usePathState = (): any => {
  const [path, setPath] = useState({
    title: "",
    imgUrl: { uri: "" },
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
