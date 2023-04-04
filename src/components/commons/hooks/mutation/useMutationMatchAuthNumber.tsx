import { gql, useMutation } from "@apollo/client";

const MATCH_AUTH = gql`
  mutation matchAuthNumber($matchAuthNumberInput: MatchAuthNumberInput!) {
    matchAuthNumber(matchAuthNumberInput: $matchAuthNumberInput)
  }
`;

export const useMutationMatchAuthNumber = (): any => {
  const matchAuth = useMutation(MATCH_AUTH);

  return matchAuth;
};
