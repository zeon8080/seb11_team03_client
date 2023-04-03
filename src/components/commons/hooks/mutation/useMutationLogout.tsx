import { gql, useMutation } from "@apollo/client";

const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

export const useMutationLogout = (): any => {
  const logoutUser = useMutation(LOGOUT);

  return logoutUser;
};
