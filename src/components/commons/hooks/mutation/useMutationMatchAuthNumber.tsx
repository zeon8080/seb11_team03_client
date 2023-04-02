import { gql, useMutation } from "@apollo/client";

const MATCH_AUTH = gql`
  mutation matchAuthNumber($matchtAuthNumberInput: MatchAuthNumberInput!) {
    matchAuthNumber(matchtAuthNumberInput: $matchtAuthNumberInput) {
      email
      authNumber
    }
  }
`;

export const useMutationMatchAuthNumber = () => {
  const matchAuth = useMutation(MATCH_AUTH);

  return matchAuth;
};
