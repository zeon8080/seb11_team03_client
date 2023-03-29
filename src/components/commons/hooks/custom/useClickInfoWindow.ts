export const useClickInfoWindow = () => {
  const onClickAdd = (props): void => {
    console.log(props);
    if (props.idx === 0) {
      props.setPath((prev) => ({
        ...prev,
        area: props.data.upperAddrName + "시",
        startPoint: props.data.middleAddrName,
      }));
    } else if (props.idx === 1) {
      props.setPath((prev) => ({
        ...prev,
        endPoint: props.data.middleAddrName,
      }));
    }
    props.setPath((prev) => ({
      ...prev,
      info: prev.info.map((el, idx) => {
        if (idx === props.idx)
          return {
            ...el,
            restaurantName: props.data.name,
            location: {
              lat: props.data.noorLat,
              lng: props.data.noorLon,
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
    }));
    console.log(props, "구아가아강가");
    props.setPath((prev) => {
      const info = [...prev.info];
      info.splice(props.idx, 1);
      info.push(defaultInfo);
      return { ...prev, info };
    });
  };
  return { onClickAdd, onClickDelete };
};
