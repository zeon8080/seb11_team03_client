import { IReserveFormData } from "../../../units/eatsMe/reserve/middle/reserveMiddle";
import { useMutationCreateReservation } from "../mutation/useMutationCreateReservation";
import { useRouterMovePage } from "./useRouterMovePage";

export const useClickReserve = (): any => {
  const [createReservation] = useMutationCreateReservation();
  const { routerMovePage } = useRouterMovePage();

  const onClickReserve = async (data: IReserveFormData): Promise<void> => {
    try {
      const result = await createReservation({
        variables: {
          createReservationInput: {
            table: 1,
            time: data.time,
            restaurantId: "123",
            reservation_time: data.reservation_time,
          },
        },
      });
      console.log(result);

      routerMovePage("/eatsMe/popularList");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return { onClickReserve };
};
