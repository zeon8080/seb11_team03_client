import { ICreateBoardInput } from "../../../../commons/types/generated/types";
import { useMutationCreateBoard } from "../mutation/useMutationCreateBoard";
import { useRouterMovePage } from "./useRouterMovePage";

interface IUseClickCreateBoard {
  onClickCreateBoard: (data: ICreateBoardInput) => Promise<void>;
}

export const useClickCreateBoard = (): IUseClickCreateBoard => {
  const [createBoard] = useMutationCreateBoard();
  const { routerMovePage } = useRouterMovePage();

  const onClickCreateBoard = async (data: ICreateBoardInput): Promise<void> => {
    try {
      const createBoardInput = {
        ...data,
        info: [...data.info.filter((el) => el.restaurantName !== "상호명")],
      };
      await createBoard({
        variables: {
          createBoardInput,
        },
      });
      routerMovePage("/eatsMe/routeList");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };
  return { onClickCreateBoard };
};
