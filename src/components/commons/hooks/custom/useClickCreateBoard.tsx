import { useMutationCreateBoard } from "../mutation/useMutationCreateBoard";

export const useClickCreateBoard = () => {
  const [createBoard] = useMutationCreateBoard();

  const onClickCreate = (data) => () => {
    console.log(data, "크릭클릭");
    
    const result = createBoard({
      variables:{
        createBoardInput:
      }
    })
  };
  return { onClickCreate };
};
