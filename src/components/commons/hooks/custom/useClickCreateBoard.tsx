import { useMutationCreateBoard } from "../mutation/useMutationCreateBoard";

export const useClickCreateBoard = () => {
  const [createBoard] = useMutationCreateBoard();
  const onClickCreate = (data) => () => {
    console.log(data, "데이타타타");
    const createBoardInput = {
      ...data,
      info: [...data.info.filter((el) => el.restaurantName !== "상호명")],
      createdAt: new Date(),
    };
    const result = createBoard({
      variables: {
        createBoardInput,
      },
    });
    console.log(result, "결과는????");
  };
  return { onClickCreate };
};
