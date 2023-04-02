import { Dispatch, SetStateAction } from "react";
import { IUpdateCommentInput } from "../../../../commons/types/generated/types";
import { useMutationUpdateComment } from "../mutation/useMutationUpdateComment";
import { FETCH_BOARD_BY_EVERY } from "../query/useQueryFetchBoardsByEvery";

interface IUseClickUpdateComment {
  onClickUpdateComment: (
    setIsCommentModify: Dispatch<SetStateAction<boolean>>
  ) => (updateCommentInput: IUpdateCommentInput) => Promise<void>;
}

export const useClickUpdateComment = (): IUseClickUpdateComment => {
  const [updateComment] = useMutationUpdateComment();

  const onClickUpdateComment =
    (setIsCommentModify: Dispatch<SetStateAction<boolean>>) =>
    async (updateCommentInput: IUpdateCommentInput): Promise<void> => {
      try {
        await updateComment({
          variables: {
            updateCommentInput,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_BY_EVERY,
            },
          ],
        });
        setIsCommentModify(false);
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      }
    };
  return { onClickUpdateComment };
};
