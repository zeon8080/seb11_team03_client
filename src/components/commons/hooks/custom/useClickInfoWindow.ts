export const useClickInfoWindow = () => {
  const onClickAdd = (props): void => {
    if (props.idx === 0) {
      props.setPath((prev) => ({
        ...prev,
        startArea: props.data.upperAddrName + "시",
        startPoint: props.data.middleAddrName,
      }));
    } else if (props.idx === 1) {
      props.setPath((prev) => ({
        ...prev,
        endArea: props.data.upperAddrName + "시",
        endPoint: props.data.middleAddrName,
      }));
    }
    props.setPath((prev) => ({
      ...prev,
      info: prev.info.map((el, idx) => {
        if (idx === props.idx)
          return {
            ...el,
            section: props.data.middleAddrName,
            area: props.data.upperAddrName + "시",
            restaurantName: props.data.name,
            location: {
              lat: Number(props.data.noorLat),
              lng: Number(props.data.noorLon),
            },
          };
        return { ...el };
      }),
    }));
  };

  const onClickDelete = (props) => {
    const defaultInfo = {
      restaurantName: "상호명",
      recommend: "",
      imgUrl: "",
      location: {
        lat: 0,
        lng: 0,
      },
    };
    props.setSlideSetting((prev) => ({
      ...prev,
      nowPage: prev.nowPage - 1,
      isFindRoad: true,
    }));
    props.setPath((prev) => {
      const info = [...prev.info];
      info.splice(props.idx, 1);
      info.push(defaultInfo);
      return { ...prev, info };
    });
  };
  return { onClickAdd, onClickDelete };
};
