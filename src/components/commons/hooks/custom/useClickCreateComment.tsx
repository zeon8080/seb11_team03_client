import { useMutationCreateComment } from "../mutation/useMutationCreateComment";

export const useClickCreateComment = () => {
  const [createComment] = useMutationCreateComment();

  const onClickCreateComment = (createCommentInput) => {
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
