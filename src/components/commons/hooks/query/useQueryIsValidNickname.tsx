import { gql } from "@apollo/client";

export const ISVALID_NICKNAME = gql`
  query isValidNickname($nickname: String!) {
    isValidNickname(nickname: $nickname) {
      nickname
    }
  }
`;
