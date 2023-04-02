import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteReplyArgs,
} from "../../../../commons/types/generated/types";

const DELETE_REPLY = gql`
  mutation ($replyId: String!) {
    deleteReply(replyId: $replyId)
  }
`;

export const useMutationDeleteReply = (): typeof deleteReply => {
  const deleteReply = useMutation<
    Pick<IMutation, "deleteReply">,
    IMutationDeleteReplyArgs
  >(DELETE_REPLY);

  return deleteReply;
};
