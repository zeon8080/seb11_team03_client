import { ICreateCommentInput } from "../../../../commons/types/generated/types";
import { useMutationCreateComment } from "../mutation/useMutationCreateComment";

interface IUseClickCreateComment {
  onClickCreateComment: (createCommentInput: ICreateCommentInput) => void;
}

export const useClickCreateComment = (): IUseClickCreateComment => {
  const [createComment] = useMutationCreateComment();

  const onClickCreateComment = (
    createCommentInput: ICreateCommentInput
  ): void => {
    try {
      void createComment({
        variables: {
          createCommentInput,
        },
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };
  return { onClickCreateComment };
};
