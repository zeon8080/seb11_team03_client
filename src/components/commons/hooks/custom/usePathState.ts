import { useState } from "react";
export const usePathState = () => {
  const [path, setPath] = useState({
    title: "",
    imgUrl: null,
    like: 0,
    info: [
      {
        restaurantName: "상호명",
        recommend: null,
        imgUrl: null,
        location: {
          lat: 0,
          lng: 0,
        },
      },
      {
        restaurantName: "상호명",
        recommend: null,
        imgUrl: null,
        location: {
          lat: 0,
          lng: 0,
        },
      },
      {
        restaurantName: "상호명",
        recommend: null,
        imgUrl: null,
        location: {
          lat: 0,
          lng: 0,
        },
      },
      {
        restaurantName: "상호명",
        recommend: null,
        imgUrl: null,
        location: {
          lat: 0,
          lng: 0,
        },
      },
      {
        restaurantName: "상호명",
        recommend: null,
        imgUrl: null,
        location: {
          lat: 0,
          lng: 0,
        },
      },
    ],
  });

  return [path, setPath];
};
