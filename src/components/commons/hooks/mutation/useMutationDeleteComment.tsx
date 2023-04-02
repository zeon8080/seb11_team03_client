import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteCommentArgs,
} from "../../../../commons/types/generated/types";

const DELETE_COMMENT = gql`
  mutation ($commentId: String!) {
    deleteComment(commentId: $commentId)
  }
`;

export const useMutationDeleteComment = (): typeof deleteComment => {
  const deleteComment = useMutation<
    Pick<IMutation, "deleteComment">,
    IMutationDeleteCommentArgs
  >(DELETE_COMMENT);

  return deleteComment;
};
