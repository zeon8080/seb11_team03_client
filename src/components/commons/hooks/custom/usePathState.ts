import { useState } from "react";
export const usePathState = () => {
  const [path, setPath] = useState({
    title: "",
    boardImg: "",
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
