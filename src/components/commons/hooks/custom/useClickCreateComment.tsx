import { ICreateCommentInput } from "../../../../commons/types/generated/types";
import { useMutationCreateComment } from "../mutation/useMutationCreateComment";
import { FETCH_BOARD_BY_EVERY } from "../query/useQueryFetchBoardsByEvery";

interface IUseClickCreateComment {
  onClickCreateComment: (
    createCommentInput: ICreateCommentInput
  ) => Promise<void>;
}

export const useClickCreateComment = (): IUseClickCreateComment => {
  const [createComment] = useMutationCreateComment();

  const onClickCreateComment = async (
    createCommentInput: ICreateCommentInput
  ): Promise<void> => {
    console.log(createCommentInput);
    try {
      await createComment({
        variables: {
          createCommentInput,
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_BOARD_BY_EVERY,
        //   },
        // ],
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };
  return { onClickCreateComment };
};
