import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateCommentArgs,
} from "../../../../commons/types/generated/types";

const CREATE_COMMENT = gql`
  mutation ($createCommentInput: CreateCommentInput!) {
    createComment(createCommentInput: $createCommentInput) {
      id
    }
  }
`;

export const useMutationCreateComment = (): typeof createComment => {
  const createComment = useMutation<
    Pick<IMutation, "createComment">,
    IMutationCreateCommentArgs
  >(CREATE_COMMENT);

  return createComment;
};
