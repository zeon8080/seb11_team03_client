import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation ($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      id
    }
  }
`;
console.log("dasodasiodsjia");
export const useMutationCreateBoard = () => {
  const createBoard = useMutation(CREATE_BOARD);

  return createBoard;
};
