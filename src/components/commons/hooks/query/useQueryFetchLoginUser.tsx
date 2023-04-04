import { gql } from "@apollo/client";

export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      id
      nickname
      userImg
    }
  }
`;
// alarms {
//   alarmMessage
//   user {
//     userImg
//   }
// }
