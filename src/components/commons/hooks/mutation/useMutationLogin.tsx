import { gql, useMutation } from "@apollo/client";

const LOGIN = gql`
  mutation login($loginAuthInput: LoginAuthInput!) {
    login(loginAuthInput: $loginAuthInput) {
      email
    }
  }
`;

export const UseMutationLogin = () => {
  const loginUser = useMutation(LOGIN);

  return loginUser;
};
