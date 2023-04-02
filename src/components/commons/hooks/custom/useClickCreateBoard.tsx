import { ICreateBoardInput } from "../../../../commons/types/generated/types";
import { useMutationCreateBoard } from "../mutation/useMutationCreateBoard";

interface IUseClickCreateBoard {
  onClickCreate: (data: ICreateBoardInput) => Promise<void>;
}

export const useClickCreateBoard = (): IUseClickCreateBoard => {
  const [createBoard] = useMutationCreateBoard();

  const onClickCreate = async (data: ICreateBoardInput): Promise<void> => {
    try {
      const createBoardInput = {
        ...data,
        info: [...data.info.filter((el) => el.restaurantName !== "상호명")],
        createdAt: new Date(),
      };
      await createBoard({
        variables: {
          createBoardInput,
        },
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };
  return { onClickCreate };
};
