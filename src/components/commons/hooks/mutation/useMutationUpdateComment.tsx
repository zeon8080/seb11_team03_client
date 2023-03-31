import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateCommentArgs,
} from "../../../../commons/types/generated/types";

const UPDATE_COMMENT = gql`
  mutation ($updateCommentInput: UpdateCommentInput!) {
    updateComment(updateCommentInput: $updateCommentInput) {
      id
    }
  }
`;

export const useMutationUpdateComment = (): typeof updateComment => {
  const updateComment = useMutation<
    Pick<IMutation, "updateComment">,
    IMutationUpdateCommentArgs
  >(UPDATE_COMMENT);
  return updateComment;
};
