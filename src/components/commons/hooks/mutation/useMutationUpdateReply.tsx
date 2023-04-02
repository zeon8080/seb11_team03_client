import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateReplyArgs,
} from "../../../../commons/types/generated/types";

const UPDATE_REPLY = gql`
  mutation ($updateReplyInput: UpdateReplyInput!) {
    updateReply(updateReplyInput: $updateReplyInput) {
      id
    }
  }
`;

export const useMutationUpdateReply = (): typeof updateReply => {
  const updateReply = useMutation<
    Pick<IMutation, "updateReply">,
    IMutationUpdateReplyArgs
  >(UPDATE_REPLY);

  return updateReply;
};
