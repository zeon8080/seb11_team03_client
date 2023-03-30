import { gql, useMutation } from "@apollo/client";

const CREATE_USER = gql`
  mutation ($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
    }
  }
`;

export const useMutationCreateUser = (): any => {
  const createUser = useMutation(CREATE_USER);

  return createUser;
};
