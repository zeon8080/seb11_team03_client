import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchUser($userId: String!) {
    fetchUser(userId: $userId) {
      id
      email
      nickname
      userImg
    }
  }
`;
