import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";

const UPDATE_BOARD = gql`
  mutation ($updateBoardInput: UpdateBoardInput!) {
    updateBoard(updateBoardInput: $updateBoardInput) {
      id
    }
  }
`;

export const useMutationUpdateBoard = (): typeof updateBoard => {
  const updateBoard = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  return updateBoard;
};
