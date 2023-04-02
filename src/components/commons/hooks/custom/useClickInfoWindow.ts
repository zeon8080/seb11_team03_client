export const useClickInfoWindow = (): any => {
  const onClickAdd = (props: any): void => {
    props.setPath((prev: any) => ({
      ...prev,
      info: prev.info.map((el: any, idx: any) => {
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

  const onClickDelete = (props: any): void => {
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

    props.setPath((prev: any) => {
      const info = [...prev.info];
      info.splice(props.idx, 1);
      info.push(defaultInfo);
      return { ...prev, info };
    });
  };
  return { onClickAdd, onClickDelete };
};
